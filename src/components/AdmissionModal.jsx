import { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';

export default function AdmissionModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    targetClass: 'Senior One (S.1)',
    residenceType: 'Boarding',
    previousScore: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      studentName: '',
      parentName: '',
      phone: '',
      email: '',
      targetClass: 'Senior One (S.1)',
      residenceType: 'Boarding',
      previousScore: '',
      message: ''
    });
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3 className="modal-title">Admissions &amp; Enrollment Inquiry</h3>
            <p className="modal-subtitle">{SCHOOL_INFO.name} &bull; Mbale, Uganda</p>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>

        {submitted ? (
          <div className="modal-success-state">
            <div className="success-badge-icon">✓</div>
            <h4>Application Inquiry Received!</h4>
            <p>
              Thank you, <strong>{formData.parentName || 'Parent/Guardian'}</strong>. We have logged your inquiry for <strong>{formData.studentName}</strong> into our admissions registry.
            </p>
            <p className="success-instruction">
              Our Academic Registrar will contact you on <strong>{formData.phone || 'your phone'}</strong> with full details regarding the interview schedule, PLE/UCE cut-off requirements, and fee structure.
            </p>
            <div className="modal-action-row">
              <button type="button" className="action-btn" onClick={resetForm}>
                Done
              </button>
            </div>
          </div>
        ) : (
          <form className="modal-form" onSubmit={handleSubmit}>
            <div className="form-grid-2">
              <div className="form-group">
                <label htmlFor="studentName">Student Full Name *</label>
                <input
                  type="text"
                  id="studentName"
                  name="studentName"
                  required
                  placeholder="e.g. Masaba Emmanuel"
                  value={formData.studentName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="parentName">Parent / Guardian Name *</label>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  required
                  placeholder="e.g. Dr. Jane Namono"
                  value={formData.parentName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-grid-2">
              <div className="form-group">
                <label htmlFor="phone">Phone Number (WhatsApp / Mobile) *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="e.g. +256 772 000 000"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e.g. parent@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-grid-2">
              <div className="form-group">
                <label htmlFor="targetClass">Class Applying For *</label>
                <select
                  id="targetClass"
                  name="targetClass"
                  value={formData.targetClass}
                  onChange={handleChange}
                >
                  <option value="Senior One (S.1)">Senior One (S.1)</option>
                  <option value="Senior Two (S.2)">Senior Two (S.2)</option>
                  <option value="Senior Three (S.3)">Senior Three (S.3)</option>
                  <option value="Senior Five (S.5 Science - PCB/PCM/BCM)">Senior Five (S.5 Science - PCB/PCM/BCM)</option>
                  <option value="Senior Five (S.5 Arts - HEG/HEL/DEG)">Senior Five (S.5 Arts - HEG/HEL/DEG)</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="residenceType">Status Requested *</label>
                <select
                  id="residenceType"
                  name="residenceType"
                  value={formData.residenceType}
                  onChange={handleChange}
                >
                  <option value="Boarding">Full Boarding Scholar</option>
                  <option value="Day">Day Scholar (Mbale Municipality)</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="previousScore">Previous PLE or UCE Aggregate / Performance</label>
              <input
                type="text"
                id="previousScore"
                name="previousScore"
                placeholder="e.g. PLE Aggregate 8 (Division 1) or UCE 14 (Division 1)"
                value={formData.previousScore}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Special Needs, Talents or Comments</label>
              <textarea
                id="message"
                name="message"
                rows="3"
                placeholder="Indicate any sports talents, musical skills, dietary or medical requirements..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="modal-footer-btns">
              <button type="button" className="btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="action-btn">
                Submit Admission Inquiry
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
