"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import {
  Type,
  Mail,
  Hash,
  FileText,
  List,
  CheckSquare,
  Circle,
  Calendar,
  Briefcase,
  Code,
  Settings,
  Users,
  TrendingUp,
  PenTool,
  Shuffle,
  CheckCircle,
  FolderOpen,
  Table,
  Clipboard,
  Rocket,
  Target,
  DollarSign,
} from "lucide-react";

interface FormField {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: string[];
}

const DataForm: React.FC = () => {
  const [fields, setFields] = useState<FormField[]>([]);
  const [isPreview, setIsPreview] = useState(false);
  const [draggedField, setDraggedField] = useState<string | null>(null);
  const [draggedFieldType, setDraggedFieldType] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  const fieldTypes = [
    { type: "text", label: "Text Input", icon: <Type size={20} /> },
    { type: "email", label: "Email", icon: <Mail size={20} /> },
    { type: "number", label: "Number", icon: <Hash size={20} /> },
    { type: "textarea", label: "Text Area", icon: <FileText size={20} /> },
    { type: "select", label: "Select", icon: <List size={20} /> },
    { type: "checkbox", label: "Checkbox", icon: <CheckSquare size={20} /> },
    { type: "radio", label: "Radio", icon: <Circle size={20} /> },
    { type: "date", label: "Date", icon: <Calendar size={20} /> },
  ];

  const addField = (type: string) => {
    const newField: FormField = {
      id: Date.now().toString(),
      type,
      label: `${type.charAt(0).toUpperCase() + type.slice(1)} Field`,
      placeholder:
        type === "text"
          ? "deepkore"
          : type === "email"
          ? "contact@deepkore.com"
          : `Enter ${type}`,
      required: false,
      options:
        type === "select" || type === "radio"
          ? ["Option 1", "Option 2"]
          : undefined,
    };
    setFields([...fields, newField]);
  };

  const removeField = (id: string) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const updateField = (id: string, updates: Partial<FormField>) => {
    setFields(
      fields.map((field) =>
        field.id === id ? { ...field, ...updates } : field
      )
    );
  };

  const handleDragStart = (fieldType: string) => {
    setDraggedFieldType(fieldType);
  };

  const handleDragEnd = () => {
    setDraggedFieldType(null);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (draggedFieldType && !isPreview) {
      addField(draggedFieldType);
    }
    setDraggedFieldType(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const moveField = (fromIndex: number, toIndex: number) => {
    const newFields = [...fields];
    const [movedField] = newFields.splice(fromIndex, 1);
    newFields.splice(toIndex, 0, movedField);
    setFields(newFields);
  };

  const renderField = (field: FormField, isPreviewMode = false) => {
    const baseClasses =
      "w-full px-4 py-4 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 backdrop-blur-sm transition-all duration-300 font-medium";
    const labelClasses =
      "block text-sm font-semibold text-slate-700 mb-3 tracking-wide";

    if (isPreviewMode) {
      switch (field.type) {
        case "text":
        case "email":
        case "number":
        case "date":
          return (
            <div key={field.id} className="mb-6">
              <label className={labelClasses}>{field.label}</label>
              <input
                type={field.type}
                defaultValue={
                  field.type === "text" || field.type === "email"
                    ? field.placeholder
                    : ""
                }
                placeholder={
                  field.type !== "text" && field.type !== "email"
                    ? field.placeholder
                    : ""
                }
                required={field.required}
                className={baseClasses}
              />
            </div>
          );
        case "textarea":
          return (
            <div key={field.id} className="mb-8">
              <label className={labelClasses}>{field.label}</label>
              <textarea
                defaultValue={
                  field.type === "textarea" ? field.placeholder : ""
                }
                placeholder={field.type !== "textarea" ? field.placeholder : ""}
                required={field.required}
                className={`${baseClasses} resize-vertical min-h-[120px]`}
                rows={4}
              />
            </div>
          );
        case "select":
          return (
            <div key={field.id} className="mb-8">
              <label className={labelClasses}>{field.label}</label>
              <select
                className={`${baseClasses} cursor-pointer`}
                required={field.required}
              >
                <option value="" className="text-slate-500">
                  Select an option
                </option>
                {field.options?.map((option, index) => (
                  <option key={index} value={option} className="text-slate-900">
                    {option}
                  </option>
                ))}
              </select>
            </div>
          );
        case "checkbox":
          return (
            <div key={field.id} className="mb-8">
              <label className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-300 hover:border-slate-400 transition-all duration-200">
                <input
                  type="checkbox"
                  required={field.required}
                  className="mr-4 h-5 w-5 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                />
                <span className="text-base font-medium text-slate-700">
                  {field.label}
                </span>
              </label>
            </div>
          );
        case "radio":
          return (
            <div key={field.id} className="mb-8">
              <label className={labelClasses}>{field.label}</label>
              <div className="space-y-3 mt-3">
                {field.options?.map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center p-3 bg-slate-50 rounded-lg border border-slate-300 hover:border-slate-400 transition-all duration-200"
                  >
                    <input
                      type="radio"
                      name={field.id}
                      value={option}
                      required={field.required}
                      className="mr-4 h-5 w-5 text-blue-600 focus:ring-blue-500 border-slate-300"
                    />
                    <span className="text-base text-slate-700 font-medium">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          );
        default:
          return null;
      }
    }

    // Enterprise Builder mode
    return (
      <motion.div
        key={field.id}
        draggable={!isPreview}
        onDragStart={() => setDraggedField(field.id)}
        onDragEnd={() => setDraggedField(null)}
        className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl p-6 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-move select-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        layout
        whileHover={{ y: -2 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <span className="text-2xl mr-4">
              {fieldTypes.find((ft) => ft.type === field.type)?.icon}
            </span>
            <span className="font-bold text-slate-800 text-lg tracking-wide">
              {field.type.charAt(0).toUpperCase() + field.type.slice(1)}
            </span>
          </div>
          <motion.button
            onClick={() => removeField(field.id)}
            className="p-2 bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 rounded-lg transition-all duration-200 border border-red-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </motion.button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3 tracking-wide">
              Field Label
            </label>
            <input
              type="text"
              value={field.label}
              onChange={(e) => updateField(field.id, { label: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 font-medium"
            />
          </div>

          {(field.type === "text" ||
            field.type === "email" ||
            field.type === "number" ||
            field.type === "textarea") && (
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3 tracking-wide">
                Placeholder Text
              </label>
              <input
                type="text"
                value={field.placeholder || ""}
                onChange={(e) =>
                  updateField(field.id, { placeholder: e.target.value })
                }
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 font-medium"
              />
            </div>
          )}

          {(field.type === "select" || field.type === "radio") && (
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3 tracking-wide">
                Options (comma separated)
              </label>
              <input
                type="text"
                value={field.options?.join(", ") || ""}
                onChange={(e) =>
                  updateField(field.id, { options: e.target.value.split(", ") })
                }
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 font-medium"
              />
            </div>
          )}

          <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-200">
            <input
              type="checkbox"
              checked={field.required || false}
              onChange={(e) =>
                updateField(field.id, { required: e.target.checked })
              }
              className="mr-4 h-5 w-5 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
            />
            <label className="text-sm font-semibold text-slate-700 tracking-wide">
              Required Field
            </label>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section - Enterprise Level */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Professional Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='40' cy='40' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Subtle Geometric Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/3 via-transparent to-indigo-500/3 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="inline-block mb-8"
            >
              <span className="inline-flex items-center px-6 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-medium tracking-wide">
                ADVANCED FORM PLATFORM
              </span>
            </motion.div>
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Intelligent Form
              <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Creation Suite
              </span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              Develop sophisticated data collection tools with cutting-edge
              security, regulatory compliance, and seamless scalability. Convert
              intricate processes into intuitive user experiences.
            </motion.p>
          </motion.div>

          {/* Professional CTA Section */}
          <div className="flex justify-center mb-16">
            <motion.div
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <button
                onClick={() => setIsPreview(false)}
                className={`px-8 py-4 rounded-xl font-semibold text-base transition-all duration-500 ${
                  !isPreview
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                Form Builder
              </button>
              <button
                onClick={() => setIsPreview(true)}
                className={`px-8 py-4 rounded-xl font-semibold text-base transition-all duration-500 ${
                  isPreview
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                Interactive Demo
              </button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Professional Field Palette */}
            {!isPreview && (
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="lg:col-span-1"
              >
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-8 sticky top-8">
                  <motion.h3
                    className="text-xl font-bold text-white mb-8 tracking-wide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Form Elements
                  </motion.h3>
                  <div className="space-y-3">
                    {fieldTypes.map((fieldType, index) => (
                      <motion.div
                        key={fieldType.type}
                        draggable={!isPreview}
                        onDragStart={() => handleDragStart(fieldType.type)}
                        onDragEnd={handleDragEnd}
                        className="flex items-center p-4 bg-white/5 hover:bg-white/10 rounded-xl cursor-move border border-white/5 hover:border-white/20 transition-all duration-300 group select-none"
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <span className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                          {fieldType.icon}
                        </span>
                        <span className="font-medium text-slate-200 group-hover:text-white transition-colors duration-300">
                          {fieldType.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Professional Form Canvas */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className={`${isPreview ? "lg:col-span-4" : "lg:col-span-3"}`}
            >
              <div
                className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8 lg:p-12 min-h-[600px]"
                onDrop={isPreview ? undefined : handleDrop}
                onDragOver={isPreview ? undefined : handleDragOver}
              >
                {isPreview ? (
                  <div>
                    <motion.h3
                      className="text-3xl font-bold text-slate-900 mb-8 tracking-tight"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Form Demonstration
                      <span className="ml-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        View Only
                      </span>
                    </motion.h3>
                    {fields.length === 0 ? (
                      <motion.div
                        className="text-center py-20 text-slate-500"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="text-7xl mb-6">
                          {" "}
                          <Clipboard size={72} />
                        </div>
                        <p className="text-2xl font-medium mb-3 text-slate-700">
                          No elements added yet
                        </p>
                        <p className="text-lg text-slate-500">
                          Switch to Builder mode to add form components
                        </p>
                      </motion.div>
                    ) : (
                      <motion.form
                        className="space-y-8 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <AnimatePresence>
                          {fields.map((field, index) => (
                            <motion.div
                              key={field.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ delay: 0.1 * index }}
                              layout
                            >
                              {renderField(field, true)}
                            </motion.div>
                          ))}
                        </AnimatePresence>
                        <motion.button
                          type="submit"
                          className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-xl shadow-slate-900/25 hover:shadow-2xl hover:shadow-slate-900/40 transition-all duration-300 border border-slate-700"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + fields.length * 0.1 }}
                        >
                          Submit Form
                        </motion.button>
                      </motion.form>
                    )}
                  </div>
                ) : (
                  <div>
                    <motion.h3
                      className="text-3xl font-bold text-slate-900 mb-8 tracking-tight"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Form Builder
                    </motion.h3>
                    <motion.div
                      className="border-2 border-dashed border-slate-300/50 rounded-2xl p-16 text-center mb-8 bg-gradient-to-br from-slate-50/50 to-transparent"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="text-6xl mb-6">
                        <Target size={60} />
                      </div>
                      <p className="text-slate-600 text-xl mb-3 font-medium">
                        Start crafting your professional form
                      </p>
                      <p className="text-slate-500 text-lg">
                        Drag components from the palette or click to add them
                      </p>
                    </motion.div>
                    <AnimatePresence>
                      {fields.map((field, index) => (
                        <React.Fragment key={field.id}>
                          {/* Drop zone above field */}
                          {!isPreview && (
                            <div
                              className={`h-2 rounded-lg transition-all duration-200 ${
                                draggedField
                                  ? "bg-blue-200 opacity-50"
                                  : "bg-transparent"
                              }`}
                              onDrop={(e) => {
                                e.preventDefault();
                                if (draggedField && draggedField !== field.id) {
                                  const fromIndex = fields.findIndex(
                                    (f) => f.id === draggedField
                                  );
                                  moveField(fromIndex, index);
                                }
                                setDraggedField(null);
                              }}
                              onDragOver={handleDragOver}
                            />
                          )}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ delay: 0.1 * index }}
                            layout
                          >
                            {renderField(field)}
                          </motion.div>
                        </React.Fragment>
                      ))}
                      {/* Drop zone at the end */}
                      {!isPreview && (
                        <div
                          className={`h-2 rounded-lg transition-all duration-200 ${
                            draggedField
                              ? "bg-blue-200 opacity-50"
                              : "bg-transparent"
                          }`}
                          onDrop={(e) => {
                            e.preventDefault();
                            if (draggedField) {
                              const fromIndex = fields.findIndex(
                                (f) => f.id === draggedField
                              );
                              moveField(fromIndex, fields.length);
                            }
                            setDraggedField(null);
                          }}
                          onDragOver={handleDragOver}
                        />
                      )}
                    </AnimatePresence>
                    {fields.length === 0 && (
                      <motion.div
                        className="text-center py-20 text-slate-500"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="text-7xl mb-6">
                          <Rocket size={72} />
                        </div>
                        <p className="text-2xl font-medium mb-3 text-slate-700">
                          Ready to create
                        </p>
                        <p className="text-lg text-slate-500">
                          Drag components from the palette or click to add them
                        </p>
                      </motion.div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enterprise Fusion Teams Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
        {/* Professional Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-medium tracking-wide">
                STRATEGIC ALLIANCES
              </span>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Collaborative Forces Propelling
              <span className="block bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">
                Technological Advancement
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              Effective alliances between business executives and tech
              specialists produce flexible solutions that revolutionize
              corporate activities and boost technological progress.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* IT Leaders - Enterprise Style */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Briefcase size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-wide">
                    Technology Management
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                    Chief Information Officers and IT managers overseeing
                    intricate corporate project lists and technological
                    innovation efforts.
                  </p>
                  <div className="w-full space-y-3">
                    <div className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                      Corporate software
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                      Process mechanization
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                      Support center enhancement
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Developers - Enterprise Style */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Code size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-wide">
                    Engineering Groups
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                    Chief Technology Officers and development managers speeding
                    up production timelines and minimizing technical
                    liabilities.
                  </p>
                  <div className="w-full space-y-3">
                    <div className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      10x efficiency improvements
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      AI-supported coding
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Corporate connections
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Process Owners - Enterprise Style */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Settings size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-wide">
                    Workflow Managers
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                    Operational directors converting procedures to digital
                    formats and enhancing business operations.
                  </p>
                  <div className="w-full space-y-3">
                    <div className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      Low-code mechanization
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      Intricate workflow management
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      AI-driven analytics
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Business Users - Enterprise Style */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Users size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-wide">
                    End Users
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                    Staff members throughout divisions utilizing user-friendly
                    applications for routine tasks.
                  </p>
                  <div className="w-full space-y-3">
                    <div className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                      No-code processes
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                      AI-augmented activities
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                      Corporate platforms
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrations That Power Your Workflow Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Professional Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium tracking-wide">
                POWERFUL INTEGRATIONS
              </span>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Integrations That Power
              <span className="block bg-gradient-to-r from-slate-300 to-slate-100 bg-clip-text text-transparent">
                Your Dataform
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              Transform every form submission into powerful business outcomes.
              Connect your forms to essential tools and automate workflows that
              drive growth and efficiency across your entire organization.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Integration Cards - Enterprise Style */}
            {[
              {
                icon: <TrendingUp size={28} />,
                title: "Customer Growth",
                description:
                  "Convert every form into new opportunities and stronger relationships.",
                features: [
                  "Lead generation",
                  "Relationship building",
                  "Opportunity tracking",
                ],
                gradient: "from-blue-600 to-indigo-600",
              },
              {
                icon: <PenTool size={28} />,
                title: "Digital Signatures",
                description:
                  "Seal approvals instantly with secure e-signatures.",
                features: [
                  "Instant approvals",
                  "Secure e-signatures",
                  "Legal compliance",
                ],
                gradient: "from-emerald-600 to-teal-600",
              },
              {
                icon: <FileText size={28} />,
                title: "Smart Documents",
                description:
                  "Keep submissions organized and accessible in your workspace.",
                features: [
                  "Organized submissions",
                  "Workspace integration",
                  "Easy access",
                ],
                gradient: "from-violet-600 to-purple-600",
              },
              {
                icon: <Users size={28} />,
                title: "Team Collaboration",
                description:
                  "Turn inputs into tasks and projects—streamlined for action.",
                features: [
                  "Task creation",
                  "Project management",
                  "Streamlined workflows",
                ],
                gradient: "from-amber-600 to-orange-600",
              },
              {
                icon: <Mail size={28} />,
                title: "Audience Engagement",
                description:
                  "Automatically build and nurture your mailing lists.",
                features: [
                  "Mailing list building",
                  "Automated nurturing",
                  "Audience growth",
                ],
                gradient: "from-rose-600 to-pink-600",
              },
              {
                icon: <DollarSign size={28} />,
                title: "Finance Made Simple",
                description:
                  "From invoices to payments—manage it all from one place.",
                features: [
                  "Invoice management",
                  "Payment processing",
                  "Financial operations",
                ],
                gradient: "from-cyan-600 to-blue-600",
              },
            ].map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                  <div className="flex flex-col h-full">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${integration.gradient} rounded-xl flex items-center justify-center text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {integration.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 tracking-wide">
                      {integration.title}
                    </h3>
                    <p className="text-slate-400 mb-6 leading-relaxed flex-grow">
                      {integration.description}
                    </p>
                    <div className="space-y-3">
                      {integration.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-sm text-slate-300"
                        >
                          <div
                            className={`w-2 h-2 bg-gradient-to-r ${integration.gradient} rounded-full mr-3`}
                          ></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Dataform Features Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
        {/* Professional Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-medium tracking-wide">
                INTELLIGENT FEATURES
              </span>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Enterprise-Grade Form
              <span className="block bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">
                Intelligence & Automation
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              Design smarter forms that adapt to your workflows and keep data
              organized with advanced features that transform how enterprises
              collect and process information.
            </motion.p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Professional Vertical Tabs */}
                <div className="lg:w-1/3 bg-gradient-to-b from-slate-50 to-white border-r border-slate-200">
                  <div className="p-8 lg:p-10">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 tracking-wide">
                      Smart Capabilities
                    </h3>
                    <div className="space-y-3">
                      {[
                        {
                          id: 0,
                          icon: <Table size={24} />,
                          title: "Dynamic Tables",
                          subtitle: "Professional data management",
                          color: "from-slate-600 to-slate-800",
                        },
                        {
                          id: 1,
                          icon: <FolderOpen size={24} />,
                          title: "Smart Field Groups",
                          subtitle: "Smart organization",
                          color: "from-blue-600 to-indigo-600",
                        },
                        {
                          id: 2,
                          icon: <CheckCircle size={24} />,
                          title: "Advanced Validation",
                          subtitle: "Enterprise-grade validation",
                          color: "from-emerald-600 to-teal-600",
                        },
                        {
                          id: 3,
                          icon: <Shuffle size={24} />,
                          title: "Intelligent Logic",
                          subtitle: "Adaptive workflows",
                          color: "from-violet-600 to-purple-600",
                        },
                      ].map((tab, index) => (
                        <motion.button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`w-full text-left p-5 rounded-2xl transition-all duration-300 ${
                            activeTab === tab.id
                              ? "bg-slate-100 border-l-4 border-slate-600 shadow-lg"
                              : "hover:bg-slate-50 border-l-4 border-transparent"
                          }`}
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="flex items-center space-x-4">
                            <div
                              className={`w-12 h-12 bg-gradient-to-br ${tab.color} rounded-xl flex items-center justify-center text-2xl shadow-lg`}
                            >
                              {tab.icon}
                            </div>
                            <div>
                              <h4
                                className={`font-bold text-lg ${
                                  activeTab === tab.id
                                    ? "text-slate-900"
                                    : "text-slate-700"
                                }`}
                              >
                                {tab.title}
                              </h4>
                              <p
                                className={`text-sm ${
                                  activeTab === tab.id
                                    ? "text-slate-600"
                                    : "text-slate-500"
                                }`}
                              >
                                {tab.subtitle}
                              </p>
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Professional Tab Content */}
                <div className="lg:w-2/3 p-8 lg:p-12">
                  <AnimatePresence mode="wait">
                    {activeTab === 0 && (
                      <motion.div
                        key="dynamic-tables"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-8"
                      >
                        <div className="flex items-center space-x-6 mb-8">
                          <div className="w-20 h-20 bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl flex items-center justify-center text-4xl shadow-xl">
                            <Table size={40} />
                          </div>
                          <div>
                            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">
                              Dynamic Tables
                            </h3>
                            <p className="text-slate-600 text-lg mt-2">
                              Enterprise data management capabilities
                            </p>
                          </div>
                        </div>
                        <p className="text-xl text-slate-700 leading-relaxed">
                          Capture and manage multiple entries within a single
                          field with advanced table functionality. Organize
                          complex data sets in clean, professional tables or
                          bulk import via CSV for efficient enterprise data
                          handling and streamlined workflows.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                            <h4 className="font-bold text-slate-900 mb-3 text-lg">
                              Multiple Data Entries
                            </h4>
                            <p className="text-slate-600 leading-relaxed">
                              Handle complex datasets with ease using dynamic
                              table structures that scale with your enterprise
                              needs.
                            </p>
                          </div>
                          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                            <h4 className="font-bold text-slate-900 mb-3 text-lg">
                              CSV Bulk Operations
                            </h4>
                            <p className="text-slate-600 leading-relaxed">
                              Streamline data import processes with professional
                              CSV handling and validation.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 1 && (
                      <motion.div
                        key="smart-field-groups"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-8"
                      >
                        <div className="flex items-center space-x-6 mb-8">
                          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-4xl shadow-xl">
                            <FolderOpen size={40} />
                          </div>
                          <div>
                            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">
                              Smart Field Groups
                            </h3>
                            <p className="text-slate-600 text-lg mt-2">
                              Intelligent field organization & access control
                            </p>
                          </div>
                        </div>
                        <p className="text-xl text-slate-700 leading-relaxed">
                          Arrange fields into logical sections and control
                          visibility based on user roles or permissions. Create
                          dynamic forms that adapt to different user contexts
                          and enterprise requirements.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                            <h4 className="font-bold text-blue-900 mb-3 text-lg">
                              Role-Based Access Control
                            </h4>
                            <p className="text-blue-700 leading-relaxed">
                              Display relevant fields to the right users with
                              enterprise-grade permission management.
                            </p>
                          </div>
                          <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-200">
                            <h4 className="font-bold text-indigo-900 mb-3 text-lg">
                              Logical Data Organization
                            </h4>
                            <p className="text-indigo-700 leading-relaxed">
                              Structure complex forms with intelligent grouping
                              for optimal user experience.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 2 && (
                      <motion.div
                        key="advanced-validation"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-8"
                      >
                        <div className="flex items-center space-x-6 mb-8">
                          <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center text-4xl shadow-xl">
                            <CheckCircle size={40} />
                          </div>
                          <div>
                            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">
                              Advanced Validation
                            </h3>
                            <p className="text-slate-600 text-lg mt-2">
                              Enterprise-grade data validation & automation
                            </p>
                          </div>
                        </div>
                        <p className="text-xl text-slate-700 leading-relaxed">
                          Set up custom rules to check responses, trigger
                          actions, and display only the right fields at the
                          right time. Ensure data quality with intelligent
                          validation that adapts to your business rules.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                          <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200">
                            <h4 className="font-bold text-emerald-900 mb-3 text-lg">
                              Custom Business Rules
                            </h4>
                            <p className="text-emerald-700 leading-relaxed">
                              Flexible validation logic that matches your
                              enterprise requirements and compliance needs.
                            </p>
                          </div>
                          <div className="bg-teal-50 p-6 rounded-2xl border border-teal-200">
                            <h4 className="font-bold text-teal-900 mb-3 text-lg">
                              Automated Workflows
                            </h4>
                            <p className="text-teal-700 leading-relaxed">
                              Trigger enterprise processes automatically based
                              on form validation and user responses.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 3 && (
                      <motion.div
                        key="intelligent-logic"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-8"
                      >
                        <div className="flex items-center space-x-6 mb-8">
                          <div className="w-20 h-20 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center text-4xl shadow-xl">
                            <Shuffle size={40} />
                          </div>
                          <div>
                            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">
                              Intelligent Logic
                            </h3>
                            <p className="text-slate-600 text-lg mt-2">
                              Adaptive form experiences & personalization
                            </p>
                          </div>
                        </div>
                        <p className="text-xl text-slate-700 leading-relaxed">
                          Guide users through your forms with conditional paths,
                          showing only what&apos;s relevant based on their
                          answers. Create personalized form journeys that
                          improve completion rates and data quality.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                          <div className="bg-violet-50 p-6 rounded-2xl border border-violet-200">
                            <h4 className="font-bold text-violet-900 mb-3 text-lg">
                              Conditional Navigation
                            </h4>
                            <p className="text-violet-700 leading-relaxed">
                              Dynamic form paths that adapt to user responses
                              and enterprise workflow requirements.
                            </p>
                          </div>
                          <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200">
                            <h4 className="font-bold text-purple-900 mb-3 text-lg">
                              Personalized Experiences
                            </h4>
                            <p className="text-purple-700 leading-relaxed">
                              Deliver relevant content and fields based on user
                              context and organizational needs.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataForm;
