const InspiringInstitutes = require("../../models/InspiringInstitutes");

const createInspiringInstitutes = async (req, res) => {
    try {
        const {
            headline,
            subHeadline,
            url,
            instituteImage,}=req.body
        const newInspiringInstitutes = new InspiringInstitutes({
            headline,
            subHeadline,
            url,
            instituteImage
        });
        await newInspiringInstitutes.save();
        res.status(201).json({
            success: true,
            message: "InspiringInstitutes created successfully",
            data: newInspiringInstitutes,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const getAllInspiringInstitutes = async (req, res) => {
    try {
        const inspiringInstitutes = await InspiringInstitutes.find();
        res.status(200).json({
            success: true,
            message: "InspiringInstitutes fetched successfully",
            data: inspiringInstitutes,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const updateInspiringInstitutes = async (req, res) => {
    try {
        const { id } = req.params;
        const { headline, subHeadline, url, instituteImage } = req.body;
        const updatedInspiringInstitutes = await InspiringInstitutes.findByIdAndUpdate(
            id,
            { headline, subHeadline, url, instituteImage },
            { new: true }
        );
        res.status(200).json({
            success: true,
            message: "InspiringInstitutes updated successfully",
            data: updatedInspiringInstitutes,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const deleteInspiringInstitutes = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedInspiringInstitutes = await InspiringInstitutes.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "InspiringInstitutes deleted successfully",
            data: deletedInspiringInstitutes,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
module.exports = { createInspiringInstitutes ,getAllInspiringInstitutes,updateInspiringInstitutes,deleteInspiringInstitutes};