export const SCHOOL_INFO = {
  name: "DEMO HIGH SCHOOL",
  shortName: "DHS Mbale",
  motto: "Strive for Excellence and Integrity",
  location: "Mbale, Uganda",
  fullAddress: "Plot 14 Cathedral Avenue, P.O. Box 482, Mbale, Uganda",
  phone: "+256 454 432 100",
  mobile1: "+256 772 123 456",
  mobile2: "+256 701 987 654",
  email: "info@demohighschool.ac.ug",
  admissionsEmail: "admissions@demohighschool.ac.ug",
  founded: 1984,
  centerNumberUCE: "U0842",
  centerNumberUACE: "U0842",
  portalUrl: "https://sec.wormdam.org/login",
  workingHours: "Monday – Friday: 8:00 AM – 5:00 PM | Sat: 8:30 AM – 1:00 PM"
};

export const IMAGES = {
  heroBanner: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&auto=format&fit=crop&q=80",
  classroom: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000&auto=format&fit=crop&q=80",
  teacherStudent: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1000&auto=format&fit=crop&q=80",
  scienceLab: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1000&auto=format&fit=crop&q=80",
  library: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1000&auto=format&fit=crop&q=80",
  campusBuilding: "https://images.unsplash.com/photo-1562774053-701939374585?w=1000&auto=format&fit=crop&q=80",
  computerLab: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1000&auto=format&fit=crop&q=80",
  studentsLawn: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=1000&auto=format&fit=crop&q=80",
  studyGroup: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1000&auto=format&fit=crop&q=80",
  sportsField: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1000&auto=format&fit=crop&q=80",
  graduation: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&auto=format&fit=crop&q=80"
};

export const QUICK_STATS = [
  { label: "Enrolled Students", value: "1,450+", desc: "Day & Boarding scholars" },
  { label: "UNEB Pass Rate", value: "98.6%", desc: "Divisions 1 & 2 in UCE / UACE" },
  { label: "Certified Staff", value: "54", desc: "Passionate, experienced teachers" },
  { label: "Campus Grounds", value: "35 Acres", desc: "Modern facilities under Mt. Elgon" }
];

export const ANNOUNCEMENTS = [
  {
    id: 1,
    tag: "UNEB Briefing",
    date: "November 24, 2026",
    title: "Senior Four & Senior Six Candidates Official Briefing",
    summary: "All S.4 and S.6 candidates alongside their parents/guardians are invited for the final spiritual blessing and UNEB exam guidelines in the Main Hall."
  },
  {
    id: 2,
    tag: "Admissions",
    date: "Ongoing",
    title: "Senior One & Senior Five Admissions for Next Academic Year",
    summary: "Intake registration is currently open. Obtain admission forms from the bursar's office or submit your application online through our portal."
  },
  {
    id: 3,
    tag: "Sports & MDD",
    date: "December 05, 2026",
    title: "Inter-House Athletics Gala at Mbale Municipal Stadium",
    summary: "Houses Elgon, Wanale, Nkokonjeru, and Sipi will compete in track, field, and cultural dance competitions."
  }
];

export const SERVICES_LIST = [
  {
    id: "o-level",
    icon: "📚",
    title: "Uganda 'O' Level Curriculum (UCE)",
    category: "Academics",
    image: IMAGES.classroom,
    description: "Comprehensive 4-year lower secondary program following the revised competence-based national curriculum by NCDC. Focuses on critical thinking, hands-on projects, and character formation.",
    features: [
      "Core Sciences: Physics, Chemistry, Biology, Mathematics",
      "Humanities & Social Sciences: Geography, History, CRE / IRE",
      "Languages: English Language, Luganda, Kiswahili, French",
      "Vocational & Electives: Agriculture, ICT, Entrepreneurship, Art & Design"
    ]
  },
  {
    id: "a-level",
    icon: "🎓",
    title: "Uganda 'A' Level Curriculum (UACE)",
    category: "Academics",
    image: IMAGES.studyGroup,
    description: "Pre-university 2-year advanced secondary program preparing students for direct admission to Makerere, Busitema, Kyambogo, and prestigious global universities.",
    features: [
      "Science Combinations: PCB/M, PCM/ICT, BCM/Sub-Math, PEM/ICT",
      "Arts & Humanities: HEG/Div, HEL/Div, DEG/Kiswahili, HED/Sub-Math",
      "Subsidiary General Paper & Sub-ICT / Sub-Math for all learners",
      "Intensive practical laboratory sessions and seminar symposia"
    ]
  },
  {
    id: "science-labs",
    icon: "🔬",
    title: "State-of-the-Art Science Laboratories",
    category: "Facilities",
    image: IMAGES.scienceLab,
    description: "Fully-equipped, dedicated Physics, Chemistry, and Biology laboratories designed to support hands-on UNEB practical examinations and scientific innovation.",
    features: [
      "Modern fume hoods, gas distribution, and safety gear",
      "Microscopes, glassware, and precision analytical instruments",
      "Experienced lab technicians assisting daily lessons",
      "Annual Mount Elgon Science & Technology Exhibition"
    ]
  },
  {
    id: "ict-center",
    icon: "💻",
    title: "Digital ICT & E-Learning Center",
    category: "Technology",
    image: IMAGES.computerLab,
    description: "A 60-seat networked computer laboratory with high-speed Starlink broadband, enabling computer literacy, coding clubs, and digital UNEB research.",
    features: [
      "High-speed fiber & satellite internet connectivity",
      "Smart projection screens for interactive visual lectures",
      "Robotics, digital media, and programming bootcamps",
      "Unrestricted access to digital encyclopedias and past papers"
    ]
  },
  {
    id: "boarding",
    icon: "🏡",
    title: "Boarding Facilities & Pastoral Care",
    category: "Student Life",
    image: IMAGES.campusBuilding,
    description: "Comfortable, safe, and disciplined boarding dormitories for boys and girls with 24/7 security, solar lighting, treated water supply, and resident matrons & patrons.",
    features: [
      "Dedicated male and female residential halls with CCTV-monitored perimeters",
      "Regular pastoral counseling, spiritual mentorship, and chaplaincy",
      "Solar backup power ensuring uninterrupted night preps",
      "On-campus sickbay with a registered resident nurse and doctor on call"
    ]
  },
  {
    id: "sports-mdd",
    icon: "⚽",
    title: "Co-Curricular, Sports & MDD",
    category: "Co-Curricular",
    image: IMAGES.sportsField,
    description: "A vibrant sports and cultural heritage program nurturing physical fitness, teamwork, artistic creativity, and East African cultural appreciation.",
    features: [
      "Competitive Football, Netball, Volleyball, Basketball, and Table Tennis",
      "Award-winning Music, Dance & Drama (MDD) cultural troupe",
      "Active clubs: Debating Society, Junior Achievement, Red Cross, Scouts",
      "Annual Inter-house gala and representation in national USSSA tournaments"
    ]
  }
];

export const LEADERSHIP_TEAM = [
  {
    name: "Mr. Charles Wanyama",
    role: "Headteacher & Secretary to BOG",
    qualification: "M.Ed (Educational Administration, Mak), B.Ed (Sc)",
    bio: "Over 22 years of pedagogical leadership in Ugandan top secondary institutions, championing holistic learning and disciplined academic results in the Elgon zone.",
    image: IMAGES.teacherStudent
  },
  {
    name: "Mrs. Sarah Namono",
    role: "Deputy Headteacher (Academics)",
    qualification: "M.Sc (Curriculum Studies), B.Sc with Ed (Hons)",
    bio: "Oversees curriculum implementation, teacher appraisal, national exam readiness, and the competence-based assessment framework.",
    image: IMAGES.classroom
  },
  {
    name: "Rev. Father David Masaba",
    role: "Deputy Headteacher (Administration)",
    qualification: "M.A (Ethics & Management), B.A (Educ)",
    bio: "Coordinates institutional welfare, student mentorship, boarding life, staff discipline, and community stakeholder relations.",
    image: IMAGES.campusBuilding
  },
  {
    name: "Mr. Peter Wekesa",
    role: "Director of Studies (DOS)",
    qualification: "B.Sc Education (Physics & Mathematics)",
    bio: "Head of academic scheduling, continuous assessment tracking, UNEB center coordination, and student academic counseling.",
    image: IMAGES.studyGroup
  }
];

export const TESTIMONIALS = [
  {
    quote: "Demo High School shaped my foundation in the sciences. The laboratory practicals and dedicated teachers enabled me to score Aggregate 12 in UCE and 19 points in UACE. Today I am pursuing Medicine at Makerere University.",
    author: "Dr. Derrick Mutonyi",
    title: "Alumnus (Class of 2018), Medical Officer"
  },
  {
    quote: "As a parent in Mbale, sending my children to Demo High School has been the best investment. The discipline, spiritual grounding, and academic consistency give every parent peace of mind.",
    author: "Hon. Grace Nandutu",
    title: "Parent & PTA Executive Member"
  },
  {
    quote: "The boarding environment is secure and supportive. Evening preps, accessible teachers, and co-curricular sports have helped me grow both academically and socially.",
    author: "Mercy Chelangat",
    title: "Head Girl (Senior Six Science Candidate)"
  }
];

export const FAQS = [
  {
    q: "How do I access the Demo High School Online Portal?",
    a: "Click the 'Access Portal' tab in the top navigation or visit https://sec.wormdam.org/login directly. Students and parents can log in using their student admission number or registered school ID."
  },
  {
    q: "Where is Demo High School located in Mbale?",
    a: "We are situated along Plot 14 Cathedral Avenue, within Mbale Municipality, just a short drive from Mbale Clock Tower, overlooking the scenic Wanale Ridge."
  },
  {
    q: "Do you offer both Day and Boarding options?",
    a: "Yes! We admit both day students from the Mbale municipal area and full boarding students from across Uganda, Kenya, and the wider East African region."
  },
  {
    q: "What are the requirements for Senior One and Senior Five admission?",
    a: "For S.1, we require the Primary Leaving Examination (PLE) result slip with good Division 1 or strong Division 2, plus an interview. For S.5, we require UCE result slips with credits in the relevant subject combinations."
  }
];
