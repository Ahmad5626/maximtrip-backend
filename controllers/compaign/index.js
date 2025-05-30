const Campaign = require('../../models/Campaign');

// Create Campaign Controller
const createCampaign = async (req, res) => {
 
  try {
    const {
      aadharImageUrl,
      accountHolderName,
      accountNumber,
      address,
      addressDetails,
      agreeAll,
      agreePayment,
      agreePrivacy,
      agreeTerms,
      bankName,
      beneficiaryDateOfBirth,
      campaignTitle,
      category,
      country,
      currency,
      dateOfBirth,
      district,
      email,
      emailId,
      emailOfImamSahab,
      endDate,
      familyName,
      featureImageUrl,
      fullNameAsPerAadhar,
      fundType,
      gender,
      givenName,
      goalAmount,
      governmentIdUrl,
      ifscCode,
      isBeneficiaryOrphan,
      isUrgent,
      location,
      maritalStatus,
      mobileNumber,
      masjidName,
      numberOfBeneficiaries,
      numberOfImamSahab,
      panImageUrl,
      phone,
      pincode,
      raisingCause,
      state,
      story,
      tagline,
      zakatVerified,
      instituteRole,
      anticipatedDonations,
      spendingPlans ,
      firstName,
      lastName

    } = req.body;

    const newCampaign = new Campaign({
      aadharImageUrl,
      accountHolderName,
      accountNumber,
      address,
      addressDetails,
      agreeAll,
      agreePayment,
      agreePrivacy,
      agreeTerms,
      bankName,
      beneficiaryDateOfBirth,
      campaignTitle,
      category,
      country,
      currency,
      dateOfBirth,
      district,
      email,
      emailId,
      emailOfImamSahab,
      endDate,
      familyName,
      featureImageUrl,
      fullNameAsPerAadhar,
      fundType,
      gender,
      givenName,
      goalAmount,
      governmentIdUrl,
      ifscCode,
      isBeneficiaryOrphan,
      isUrgent,
      location,
      maritalStatus,
      mobileNumber,
      masjidName,
      numberOfBeneficiaries,
      numberOfImamSahab,
      panImageUrl,
      phone,
      pincode,
      raisingCause,
      state,
      story,
      tagline,
      zakatVerified,
      instituteRole,
      anticipatedDonations,
      spendingPlans,
      firstName,
      lastName,
      createdBy: req.user.id
    });

    await newCampaign.save();

    res.status(201).json({
      success: true,
      message: 'Campaign created successfully',
      data: newCampaign,
  
    });
    return newCampaign;
  } catch (error) {
    console.error('Campaign creation error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to create campaign',
      error: error.message,
    });
    return error.message;
  }
};

const getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.status(200).json({
      success: true,
      message: 'Campaigns fetched successfully',
      data: campaigns,
    });
  } catch (error) {
    console.error('Error fetching campaigns:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch campaigns',
      error: error.message,
    });
  }
};

const getLoginUserCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find({ createdBy: req.user.id });
    res.status(200).json({
      success: true,
      message: 'Campaigns fetched successfully',
      data: campaigns,
    });
  } catch (error) {
    console.error('Error fetching campaigns:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch campaigns',
      error: error.message,
    });
  }
};

const updateCampaign = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body, updatedAt: new Date() };
    
    const updatedCampaign = await Campaign.findByIdAndUpdate(
      id, 
      updateData,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: 'Campaign updated successfully',
      data: updatedCampaign,
    });
  } catch (error) {
    console.error('Error updating campaign:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to update campaign',
      error: error.message,
    });
  }
};
const deleteCampaign = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCampaign = await Campaign.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: 'Campaign deleted successfully',
      data: deletedCampaign,
    });
  } catch (error) {
    console.error('Error deleting campaign:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to delete campaign',
      error: error.message,
    });
  }
};

module.exports = {
  createCampaign,
  getAllCampaigns,
  getLoginUserCampaigns,
  updateCampaign,
  deleteCampaign
};