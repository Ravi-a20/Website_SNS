"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { ChevronDown, ChevronUp, Plus, X } from "lucide-react"

export default function CareerForm({ positions = [] }) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [expandedSection, setExpandedSection] = useState("personal")

  // Education fields
  const [educationFields, setEducationFields] = useState([{ degree: "", institution: "", year: "", percentage: "" }])

  // Experience fields
  const [experienceFields, setExperienceFields] = useState([
    { company: "", position: "", duration: "", responsibilities: "" },
  ])

  // Form data
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    dateOfBirth: "",
    gender: "male",

    // Identification
    aadhaarNumber: "",
    panNumber: "",

    // Position Details
    position: positions.length > 0 ? positions[0] : "",
    expectedSalary: "",
    joiningTime: "immediate",

    // Skills & Qualifications
    languages: "",
    computerSkills: "",
    specialTraining: "",
    physicalFitness: "",

    // Additional Information
    criminalRecord: "no",
    criminalDetails: "",
    willingToRelocate: "yes",
    referenceSource: "",
    additionalInfo: "",
  })

  // Toggle section expansion
  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection("")
    } else {
      setExpandedSection(section)
    }
  }

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Show/hide criminal record details field
    if (name === "criminalRecord" && value === "yes") {
      document.getElementById("criminalDetails").classList.remove("hidden")
    } else if (name === "criminalRecord" && value === "no") {
      document.getElementById("criminalDetails").classList.add("hidden")
    }
  }

  // Add education field
  const addEducationField = () => {
    setEducationFields([...educationFields, { degree: "", institution: "", year: "", percentage: "" }])
  }

  // Remove education field
  const removeEducationField = (index) => {
    const newFields = [...educationFields]
    newFields.splice(index, 1)
    setEducationFields(newFields)
  }

  // Handle education field changes
  const handleEducationChange = (index, e) => {
    const { name, value } = e.target
    const newFields = [...educationFields]
    newFields[index][name] = value
    setEducationFields(newFields)
  }

  // Add experience field
  const addExperienceField = () => {
    setExperienceFields([...experienceFields, { company: "", position: "", duration: "", responsibilities: "" }])
  }

  // Remove experience field
  const removeExperienceField = (index) => {
    const newFields = [...experienceFields]
    newFields.splice(index, 1)
    setExperienceFields(newFields)
  }

  // Handle experience field changes
  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target
    const newFields = [...experienceFields]
    newFields[index][name] = value
    setExperienceFields(newFields)
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Combine all form data
      const completeFormData = {
        ...formData,
        education: educationFields,
        experience: experienceFields,
      }

      const response = await fetch("/api/career-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(completeFormData),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Application Submitted!",
          description: "Thank you for your interest. We'll review your application and contact you soon.",
          variant: "success",
        })

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          pincode: "",
          dateOfBirth: "",
          gender: "male",
          aadhaarNumber: "",
          panNumber: "",
          position: positions.length > 0 ? positions[0] : "",
          expectedSalary: "",
          joiningTime: "immediate",
          languages: "",
          computerSkills: "",
          specialTraining: "",
          physicalFitness: "",
          criminalRecord: "no",
          criminalDetails: "",
          willingToRelocate: "yes",
          referenceSource: "",
          additionalInfo: "",
        })
        setEducationFields([{ degree: "", institution: "", year: "", percentage: "" }])
        setExperienceFields([{ company: "", position: "", duration: "", responsibilities: "" }])
      } else {
        throw new Error(data.message || "Something went wrong")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to submit your application. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      {/* Personal Information Section */}
      <div className="border rounded-lg overflow-hidden">
        <button
          type="button"
          className={`w-full flex justify-between items-center p-4 text-left font-medium text-lg ${expandedSection === "personal" ? "bg-blue-50 text-blue-700" : "bg-gray-100"}`}
          onClick={() => toggleSection("personal")}
        >
          Personal Information
          {expandedSection === "personal" ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>

        {expandedSection === "personal" && (
          <div className="p-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="2"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                  State <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                  PIN Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gender <span className="text-red-500">*</span>
                </label>
                <div className="flex space-x-4 mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === "male"}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2">Male</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === "female"}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2">Female</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="other"
                      checked={formData.gender === "other"}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2">Other</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Identification Section */}
      <div className="border rounded-lg overflow-hidden">
        <button
          type="button"
          className={`w-full flex justify-between items-center p-4 text-left font-medium text-lg ${expandedSection === "identification" ? "bg-blue-50 text-blue-700" : "bg-gray-100"}`}
          onClick={() => toggleSection("identification")}
        >
          Identification Details
          {expandedSection === "identification" ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>

        {expandedSection === "identification" && (
          <div className="p-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="aadhaarNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Aadhaar Card Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="aadhaarNumber"
                  name="aadhaarNumber"
                  value={formData.aadhaarNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  maxLength="12"
                  pattern="[0-9]{12}"
                  title="Please enter a valid 12-digit Aadhaar number"
                />
                <p className="text-xs text-gray-500 mt-1">Format: 12 digits without spaces</p>
              </div>
              <div>
                <label htmlFor="panNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  PAN Number
                </label>
                <input
                  type="text"
                  id="panNumber"
                  name="panNumber"
                  value={formData.panNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  maxLength="10"
                  pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                  title="Please enter a valid 10-character PAN number"
                />
                <p className="text-xs text-gray-500 mt-1">Format: ABCDE1234F</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Education Section */}
      <div className="border rounded-lg overflow-hidden">
        <button
          type="button"
          className={`w-full flex justify-between items-center p-4 text-left font-medium text-lg ${expandedSection === "education" ? "bg-blue-50 text-blue-700" : "bg-gray-100"}`}
          onClick={() => toggleSection("education")}
        >
          Educational Qualifications
          {expandedSection === "education" ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>

        {expandedSection === "education" && (
          <div className="p-4 space-y-6">
            {educationFields.map((field, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-md relative">
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeEducationField(index)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor={`degree-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                      Degree/Certificate <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id={`degree-${index}`}
                      name="degree"
                      value={field.degree}
                      onChange={(e) => handleEducationChange(index, e)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      placeholder="e.g., 10th, 12th, B.A., B.Sc."
                    />
                  </div>
                  <div>
                    <label htmlFor={`institution-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                      School/College/University <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id={`institution-${index}`}
                      name="institution"
                      value={field.institution}
                      onChange={(e) => handleEducationChange(index, e)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={`year-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                      Year of Completion <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id={`year-${index}`}
                      name="year"
                      value={field.year}
                      onChange={(e) => handleEducationChange(index, e)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      placeholder="e.g., 2018"
                    />
                  </div>
                  <div>
                    <label htmlFor={`percentage-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                      Percentage/CGPA <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id={`percentage-${index}`}
                      name="percentage"
                      value={field.percentage}
                      onChange={(e) => handleEducationChange(index, e)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      placeholder="e.g., 75% or 8.5 CGPA"
                    />
                  </div>
                </div>
              </div>
            ))}

            <div className="text-center">
              <Button
                type="button"
                variant="outline"
                onClick={addEducationField}
                className="border-blue-700 text-blue-700 hover:bg-blue-50"
              >
                <Plus className="h-4 w-4 mr-2" /> Add Another Education
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Experience Section */}
      <div className="border rounded-lg overflow-hidden">
        <button
          type="button"
          className={`w-full flex justify-between items-center p-4 text-left font-medium text-lg ${expandedSection === "experience" ? "bg-blue-50 text-blue-700" : "bg-gray-100"}`}
          onClick={() => toggleSection("experience")}
        >
          Work Experience
          {expandedSection === "experience" ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>

        {expandedSection === "experience" && (
          <div className="p-4 space-y-6">
            {experienceFields.map((field, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-md relative">
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeExperienceField(index)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor={`company-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id={`company-${index}`}
                      name="company"
                      value={field.company}
                      onChange={(e) => handleExperienceChange(index, e)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Leave blank if no previous experience"
                    />
                  </div>
                  <div>
                    <label htmlFor={`position-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                      Position/Title
                    </label>
                    <input
                      type="text"
                      id={`position-${index}`}
                      name="position"
                      value={field.position}
                      onChange={(e) => handleExperienceChange(index, e)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor={`duration-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                      Duration
                    </label>
                    <input
                      type="text"
                      id={`duration-${index}`}
                      name="duration"
                      value={field.duration}
                      onChange={(e) => handleExperienceChange(index, e)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Jan 2018 - Mar 2020"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor={`responsibilities-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                    Key Responsibilities
                  </label>
                  <textarea
                    id={`responsibilities-${index}`}
                    name="responsibilities"
                    value={field.responsibilities}
                    onChange={(e) => handleExperienceChange(index, e)}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Briefly describe your responsibilities and achievements"
                  ></textarea>
                </div>
              </div>
            ))}

            <div className="text-center">
              <Button
                type="button"
                variant="outline"
                onClick={addExperienceField}
                className="border-blue-700 text-blue-700 hover:bg-blue-50"
              >
                <Plus className="h-4 w-4 mr-2" /> Add Another Experience
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Position Details Section */}
      <div className="border rounded-lg overflow-hidden">
        <button
          type="button"
          className={`w-full flex justify-between items-center p-4 text-left font-medium text-lg ${expandedSection === "position" ? "bg-blue-50 text-blue-700" : "bg-gray-100"}`}
          onClick={() => toggleSection("position")}
        >
          Position Details
          {expandedSection === "position" ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>

        {expandedSection === "position" && (
          <div className="p-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                  Position Applying For <span className="text-red-500">*</span>
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  {positions.map((position, index) => (
                    <option key={index} value={position}>
                      {position}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="expectedSalary" className="block text-sm font-medium text-gray-700 mb-1">
                  Expected Salary (Monthly in ₹) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="expectedSalary"
                  name="expectedSalary"
                  value={formData.expectedSalary}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  placeholder="e.g., 25000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                When can you join? <span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-4 mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="joiningTime"
                    value="immediate"
                    checked={formData.joiningTime === "immediate"}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2">Immediately</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="joiningTime"
                    value="15days"
                    checked={formData.joiningTime === "15days"}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2">15 Days</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="joiningTime"
                    value="1month"
                    checked={formData.joiningTime === "1month"}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2">1 Month</span>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Skills Section */}
      <div className="border rounded-lg overflow-hidden">
        <button
          type="button"
          className={`w-full flex justify-between items-center p-4 text-left font-medium text-lg ${expandedSection === "skills" ? "bg-blue-50 text-blue-700" : "bg-gray-100"}`}
          onClick={() => toggleSection("skills")}
        >
          Skills & Qualifications
          {expandedSection === "skills" ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>

        {expandedSection === "skills" && (
          <div className="p-4 space-y-4">
            <div>
              <label htmlFor="languages" className="block text-sm font-medium text-gray-700 mb-1">
                Languages Known <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="languages"
                name="languages"
                value={formData.languages}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="e.g., Hindi, English, Tamil"
              />
            </div>

            <div>
              <label htmlFor="computerSkills" className="block text-sm font-medium text-gray-700 mb-1">
                Computer Skills (if any)
              </label>
              <input
                type="text"
                id="computerSkills"
                name="computerSkills"
                value={formData.computerSkills}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., MS Office, Basic Computer Knowledge"
              />
            </div>

            <div>
              <label htmlFor="specialTraining" className="block text-sm font-medium text-gray-700 mb-1">
                Special Training/Certifications
              </label>
              <textarea
                id="specialTraining"
                name="specialTraining"
                value={formData.specialTraining}
                onChange={handleChange}
                rows="2"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Security Training, First Aid, Fire Safety"
              ></textarea>
            </div>

            <div>
              <label htmlFor="physicalFitness" className="block text-sm font-medium text-gray-700 mb-1">
                Physical Fitness Details <span className="text-red-500">*</span>
              </label>
              <textarea
                id="physicalFitness"
                name="physicalFitness"
                value={formData.physicalFitness}
                onChange={handleChange}
                rows="2"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="e.g., Height, Weight, Any medical conditions"
              ></textarea>
            </div>
          </div>
        )}
      </div>

      {/* Additional Information Section */}
      <div className="border rounded-lg overflow-hidden">
        <button
          type="button"
          className={`w-full flex justify-between items-center p-4 text-left font-medium text-lg ${expandedSection === "additional" ? "bg-blue-50 text-blue-700" : "bg-gray-100"}`}
          onClick={() => toggleSection("additional")}
        >
          Additional Information
          {expandedSection === "additional" ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>

        {expandedSection === "additional" && (
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Do you have any criminal record? <span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-4 mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="criminalRecord"
                    value="no"
                    checked={formData.criminalRecord === "no"}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2">No</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="criminalRecord"
                    value="yes"
                    checked={formData.criminalRecord === "yes"}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2">Yes</span>
                </label>
              </div>
            </div>

            <div id="criminalDetails" className={formData.criminalRecord === "yes" ? "" : "hidden"}>
              <label htmlFor="criminalDetails" className="block text-sm font-medium text-gray-700 mb-1">
                Please provide details
              </label>
              <textarea
                id="criminalDetails"
                name="criminalDetails"
                value={formData.criminalDetails}
                onChange={handleChange}
                rows="2"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Are you willing to relocate? <span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-4 mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="willingToRelocate"
                    value="yes"
                    checked={formData.willingToRelocate === "yes"}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="willingToRelocate"
                    value="no"
                    checked={formData.willingToRelocate === "no"}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="referenceSource" className="block text-sm font-medium text-gray-700 mb-1">
                How did you hear about us?
              </label>
              <select
                id="referenceSource"
                name="referenceSource"
                value={formData.referenceSource}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select an option</option>
                <option value="website">Company Website</option>
                <option value="jobPortal">Job Portal</option>
                <option value="newspaper">Newspaper</option>
                <option value="socialMedia">Social Media</option>
                <option value="friend">Friend/Relative</option>
                <option value="employee">Current Employee</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
                Any additional information you would like to share
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Any other information that might be relevant to your application"
              ></textarea>
            </div>
          </div>
        )}
      </div>

      {/* Declaration and Submit */}
      <div className="space-y-6">
        <div className="p-4 bg-gray-50 rounded-lg">
          <label className="flex items-start">
            <input type="checkbox" required className="h-4 w-4 mt-1 text-blue-600" />
            <span className="ml-2 text-sm text-gray-700">
              I hereby declare that the information provided above is true to the best of my knowledge. I understand
              that any false statement may result in rejection of my application or termination of employment if hired.
              I authorize SNS India to verify all information provided in this application.
            </span>
          </label>
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-800 transition-transform duration-300 hover:-translate-y-1 py-3"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting Application..." : "Submit Application"}
        </Button>
      </div>
    </form>
  )
}

