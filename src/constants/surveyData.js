export const surveyData = [
    {
        section: "Basic Information",
        questions: [
            {
                id: "q1",
                type: "text",
                label: "Name",
                required: true,
            },
            {
                id: "q2",
                type: "radio",
                label: "What is your age group?",
                options: [
                    "Under 18",
                    "18 – 21",
                    "22 – 25",
                    "26 – 30",
                    "31 and above",
                ],
            },
            {
                id: "q3",
                type: "radio",
                label: "What best describes your current status?",
                options: [
                    "School Student",
                    "Undergraduate Student",
                    "Postgraduate Student",
                    "Working Professional",
                    "Startup Founder / Entrepreneur",
                    "Freelancer / Digital Creator",
                    "Self-Learner / Skill Builder",
                ],
            },
            {
                id: "q4",
                type: "radio",
                label: "What is your primary field?",
                options: [
                    "Engineering / Technology",
                    "Business / Finance / MBA",
                    "Design / Creative Arts",
                    "Medicine / Healthcare",
                    "Law",
                    "Commerce / Accounting",
                    "Humanities / Social Sciences",
                    "Other",
                ],
            },
            {
                id: "q5",
                type: "radio",
                label: "Where are you based?",
                options: [
                    "Metro City",
                    "Tier 2 City",
                    "Tier 3 City or Town",
                    "Outside India",
                ],
            },
        ],
    },

    {
        section: "Goals & Aspirations",
        questions: [
            {
                id: "q6",
                type: "radio",
                label: "What is your primary goal at the moment?",
                options: [
                    "Cracking competitive exam",
                    "Improving academic performance",
                    "Learning new skill",
                    "Growing startup",
                    "Getting job/internship",
                    "Side project",
                    "Improving habits",
                ],
            },
            {
                id: "q7",
                type: "radio",
                label: "How many times have you restarted your goal?",
                options: [
                    "First attempt",
                    "Once or twice",
                    "3 to 5 times",
                    "More than 5 times",
                ],
            },
            {
                id: "q8",
                type: "radio",
                label: "How clear is your daily action plan?",
                options: [
                    "Very clear",
                    "Somewhat clear",
                    "Not very clear",
                    "No plan",
                ],
            },
        ],
    },

    {
        section: "Productivity Challenges",
        questions: [
            {
                id: "q9",
                type: "radio",
                label: "Biggest productivity challenge?",
                options: [
                    "Lose consistency",
                    "Distractions",
                    "Procrastination",
                    "No accountability",
                    "No planning",
                    "Overwhelmed",
                    "Low motivation",
                ],
            },
            {
                id: "q10",
                type: "radio",
                label: "Focused hours per day?",
                options: [
                    "< 1 hour",
                    "1–2 hours",
                    "2–4 hours",
                    "4–6 hours",
                    "6+ hours",
                ],
            },
            {
                id: "q11",
                type: "radio",
                label: "Consistency level?",
                options: [
                    "Very consistent",
                    "Mostly consistent",
                    "Inconsistent",
                    "Very inconsistent",
                ],
            },
        ],
    },

    {
        section: "Platform Expectations",
        questions: [
            {
                id: "q26",
                type: "radio",
                label:
                    "How likely are you to try AI + accountability platform?",
                options: [
                    "Extremely likely",
                    "Likely",
                    "Neutral",
                    "Unlikely",
                    "Very unlikely",
                ],
            },
            {
                id: "q27",
                type: "radio",
                label: "What would make you sign up immediately?",
                options: [
                    "Free start",
                    "Trusted community",
                    "AI planner",
                    "Mentors",
                    "Live study rooms",
                    "Progress tracking",
                ],
            },
        ],
    },
];