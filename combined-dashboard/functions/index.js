const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors"); // Import the CORS library

admin.initializeApp();
const db = admin.firestore();

// Enable CORS for all origins (you can restrict it later)
const corsHandler = cors({ origin: true });

// Update Report Status + optional fields
exports.updateReportStatus = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    try {
      const { reportId, status, officerAssignedCategory, rejectReason, moreInfoRequest } = req.body;

      if (!reportId || !status) {
        return res.status(400).json({ error: "Missing reportId or status." });
      }

      const reportRef = db.collection("reports").doc(reportId);
      const updateData = {
        status,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      };

      if (officerAssignedCategory) updateData.officerAssignedCategory = officerAssignedCategory;
      if (rejectReason) updateData.rejectReason = rejectReason;
      if (moreInfoRequest) updateData.moreInfoRequest = moreInfoRequest;

      await reportRef.update(updateData);
      return res.status(200).json({ message: `Report ${reportId} updated.` });
    } catch (error) {
      console.error("Update error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });
});

// Generate Ticket
exports.generateTicket = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    try {
      const { reportId } = req.body;
      if (!reportId) return res.status(400).json({ error: "Missing reportId" });

      // Add logic for ticket creation
      await db.collection("tickets").add({
        reportId,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        issuedBy: "Officer",
      });

      return res.status(200).json({ message: "Ticket generated." });
    } catch (error) {
      console.error("Ticket error:", error);
      return res.status(500).json({ error: "Failed to generate ticket." });
    }
  });
});

// Redirect Report
exports.redirectReport = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    try {
      const { reportId, department } = req.body;
      if (!reportId || !department) return res.status(400).json({ error: "Missing required fields" });

      const reportRef = db.collection("reports").doc(reportId);
      await reportRef.update({
        status: "Redirected",
        redirectedTo: department,
        redirectedAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      return res.status(200).json({ message: "Report redirected." });
    } catch (error) {
      console.error("Redirect error:", error);
      return res.status(500).json({ error: "Redirect failed." });
    }
  });
});
