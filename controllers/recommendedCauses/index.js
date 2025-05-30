const RecommendedCauses = require('../../models/RecommendedCauses');

const createRecommendedCauses = async (req, res) => {
    const {
        livelihoodforUlama,
        constructionSupportforMadrasas,
        studentEducation,
        helpPoor,
        helpOrphans,
        medicalRelief,
        constructionSupportforMasjids,
    } = req.body;
    try {
        const recommendedCauses = new RecommendedCauses({
            livelihoodforUlama,
            constructionSupportforMadrasas,
            studentEducation,
            helpPoor,
            helpOrphans,
            medicalRelief,
            constructionSupportforMasjids
        });
        await recommendedCauses.save();
        res.status(201).json({
            success: true,
            message: "RecommendedCauses created successfully",
            data: recommendedCauses,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllRecommendedCauses = async (req, res) => {
    try {
        const recommendedCauses = await RecommendedCauses.findOne({});
        res.status(200).json(recommendedCauses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const updateRecommendedCauses = async (req, res) => {
    const {
        livelihoodforUlama,
        constructionSupportforMadrasas,
        studentEducation,
        helpPoor,
        helpOrphans,
        medicalRelief,
        constructionSupportforMasjids,
    } = req.body;
    try {
        const recommendedCauses = await RecommendedCauses.findOne({});
        recommendedCauses.livelihoodforUlama = livelihoodforUlama;
        recommendedCauses.constructionSupportforMadrasas = constructionSupportforMadrasas;
        recommendedCauses.studentEducation = studentEducation;
        recommendedCauses.helpPoor = helpPoor;
        recommendedCauses.helpOrphans = helpOrphans;
        recommendedCauses.medicalRelief = medicalRelief;
        recommendedCauses.constructionSupportforMasjids = constructionSupportforMasjids;
        await recommendedCauses.save();
        res.status(200).json(recommendedCauses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createRecommendedCauses, getAllRecommendedCauses, updateRecommendedCauses };