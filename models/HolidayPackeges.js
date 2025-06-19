const mongoose = require("mongoose")

const ItineraryDaySchema = new mongoose.Schema({
  day: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  activities: [
    {
      type: String,
    },
  ],
  meals: [
    {
      type: String,
      enum: ["Breakfast", "Lunch", "Dinner"],
    },
  ],
  accommodation: {
    type: String,
  },
})

const HolidayPackageSchema = new mongoose.Schema(
  {
    headline: {
      type: String,
      required: true,
      trim: true,
    },
    days: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    overview: {
      type: String,
      required: true,
    },
    heroImage: {
      type: String,
      required: true,
    },
    multipleImages: {
      type: [String],
      default: [],
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    originalPrice: {
      type: Number,
      min: 0,
    },
    category: {
      type: String,
      required: true,
    },
   
    itinerary: [ItineraryDaySchema],
    inclusions: [
      {
        type: String,
        required: true,
      },
    ],
    exclusions: [
      {
        type: String,
        required: true,
      },
    ],
    termsAndConditions: [
      {
        type: String,
        required: true,
      },
    ],
    highlights: [
      {
        type: String,
      },
    ],
  
   
    rating: {
      average: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
      },
      count: {
        type: Number,
        default: 0,
      },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    
    tags: [
      {
        type: String,
      },
    ],
 
  },
  {
    timestamps: true,
  },
)

// Index for better search performance
HolidayPackageSchema.index({ category: 1, isActive: 1 })
HolidayPackageSchema.index({ price: 1 })
HolidayPackageSchema.index({ "rating.average": -1 })

module.exports = mongoose.model("HolidayPackage", HolidayPackageSchema)
