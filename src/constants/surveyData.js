export const surveyData = [
    {
        section: "Personal Information",
        description: "Basic details required for your profile",
        questions: [
            {
                id: "name",
                type: "text",
                label: "Full Name",
                placeholder: "Enter your full name",
                // required: true,
                grid: "col-span-1",
            },
            {
                id: "phone",
                type: "text",
                label: "Phone Number",
                placeholder: "Enter your phone number",
                // required: true,
                grid: "col-span-1",
            },
            {
                id: "college",
                type: "text",
                label: "College Name",
                placeholder: "Enter your college name",
                // required: true,
                grid: "col-span-1",
            },
            {
                id: "branch",
                type: "text",
                label: "Course / Branch",
                placeholder: "B.tech/CSE",
                // required: true,
                grid: "col-span-1",
            },
            {
                id: "yearOfStudy",
                type: "select",
                label: "Year of Study",
                placeholder: "Select your year",
                // required: true,
                options: ["1st Year", "2nd Year", "3rd Year", "4th Year"],
                grid: "col-span-1",
            },
            {
                id: "referralCode",
                type: "text",
                label: "Referral Code (Optional)",
                placeholder: "Enter referral code",
                required: false,
                grid: "col-span-2",
            },
        ],
    },

    {
        section: "Goals & Aspirations",
        questions: [
            {
                id: "q1",
                type: "radio",
                label: "Question 1: What is your primary goal at the moment?",
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
                id: "q2",
                type: "radio",
                label: "Question 2: How many times have you restarted your goal?",
                options: [
                    "First attempt",
                    "Once or twice",
                    "3 to 5 times",
                    "More than 5 times",
                ],
            },
            {
                id: "q3",
                type: "radio",
                label: "Question 3: How clear is your daily action plan?",
                options: ["Very clear", "Somewhat clear", "Not very clear", "No plan"],
            },
        ],
    },

    {
        section: "Productivity Challenges",
        questions: [
            {
                id: "q4",
                type: "radio",
                label: "Question 4: Biggest productivity challenge?",
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
                id: "q5",
                type: "radio",
                label: "Question 5: Focused hours per day?",
                options: [
                    "< 1 hour",
                    "1–2 hours",
                    "2–4 hours",
                    "4–6 hours",
                    "6+ hours",
                ],
            },
            {
                id: "q6",
                type: "radio",
                label: "Question 6: Consistency level?",
                options: [
                    "Very consistent",
                    "Mostly consistent",
                    "Inconsistent",
                    "Very inconsistent",
                ],
            },
            {
                id: "q7",
                type: "radio",
                label: "Question 7: Preferred study/work time?",
                options: [
                    "Early Mornings (5 AM - 8 AM)",
                    "Mornings (8 AM - 12 PM)",
                    "Afternoon (12 PM - 4 PM)",
                    "Evenings (4 PM - 8 PM)",
                    "Night (8 PM - 12 AM)",
                    "Late Night (after 12 AM)",
                ],
            },
            {
                id: "q8",
                type: "radio",
                label: "Question 8: How often do you work at full potential?",
                options: [
                    "Almost always",
                    "Often",
                    "Sometimes",
                    "Rarely",
                    "Almost never",
                ],
            },
            {
                id: "q9",
                type: "radio",
                label: "Question 9: Have you tried building a routine but failed?",
                options: [
                    "Yes, multiple times",
                    "Yes, once or twice",
                    "No, I've managed to stay consistent",
                    "I've never seriously tried",
                ],
            },
            {
                id: "q10",
                type: "radio",
                label: "Question 10: Urgency to fix consistency?",
                options: [
                    "Extremely urgent",
                    "Fairly urgent",
                    "Somewhat urgent",
                    "Not urgent",
                ],
            },
        ],
    },

    {
        section: "Tools & Habits",
        questions: [
            {
                id: "q11",
                type: "checkbox",
                label: "Question 11: Productivity tools you currently use?",
                options: [
                    "Notion",
                    "Google Calendar / Tasks",
                    "Forest / Focus apps",
                    "YouTube study streams",
                    "WhatsApp / Telegram groups",
                    "Pomodoro apps",
                    "Physical planner",
                    "None (I don't use any tools)",
                ],
                maxSelect: null,
            },
            {
                id: "q12",
                type: "radio",
                label: "Question 12: Satisfaction with tools?",
                options: [
                    "Very satisfied",
                    "Somewhat satisfied",
                    "Neutral",
                    "Unsatisfied",
                    "I don't use tools",
                ],
            },
            {
                id: "q13",
                type: "radio",
                label: "Question 13: Biggest gap in tools?",
                options: [
                    "No accountability",
                    "No progress tracking",
                    "No community",
                    "Too complex",
                    "No AI planning",
                    "No goal-action link",
                ],
            },
        ],
    },

    {
        section: "Platform Expectations",
        questions: [
            {
                id: "q14",
                type: "checkbox",
                label: "Question 14: Features you want (Top 3)",
                options: [
                    "AI study plans",
                    "Pomodoro tracking",
                    "Virtual study rooms",
                    "Mentor access",
                    "Consistency streaks",
                    "Analytics dashboard",
                    "Accountability groups",
                ],
                maxSelect: 3,
            },
            {
                id: "q15",
                type: "radio",
                label: "Question 15: Studying with others?",
                options: [
                    "Extremely important",
                    "Somewhat important",
                    "Neutral",
                    "Not important",
                ],
            },
            {
                id: "q16",
                type: "radio",
                label: "Question 16: Importance of mentorship?",
                options: [
                    "Very important",
                    "Somewhat important",
                    "Neutral",
                    "Not important",
                ],
            },
            {
                id: "q17",
                type: "radio",
                label: "Question 17: Willingness to pay monthly?",
                options: [
                    "Free only",
                    "Up to ₹199",
                    "₹200–₹499",
                    "₹500–₹999",
                    "Above ₹999",
                ],
            },
            {
                id: "q18",
                type: "radio",
                label: "Question 18: Most used learning platform?",
                options: [
                    "YouTube",
                    "Instagram",
                    "LinkedIn",
                    "Telegram",
                    "WhatsApp",
                    "Twitter / X",
                    "Reddit",
                ],
            },
            {
                id: "q19",
                type: "radio",
                label: "Question 19: Heard about Medhashala before?",
                options: [
                    "Already part of community",
                    "Seen on social media",
                    "Heard name only",
                    "First time",
                ],
            },
        ],
    },

    {
        section: "Platform Intent",
        questions: [
            {
                id: "q20",
                type: "radio",
                label: "Question 20: Likelihood to try AI + accountability platform?",
                options: [
                    "Extremely likely",
                    "Likely",
                    "Neutral",
                    "Unlikely",
                    "Very unlikely",
                ],
            },
            {
                id: "q21",
                type: "radio",
                label: "Question 21: What would make you sign up immediately?",
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

]


// export const surveyData = [



// ];




// {
//         section: "Personal Information",
//         questions: [
//             {
//                 id: "q1",
//                 type: "text",
//                 label: "Full Name",
//                 placeholder: "Enter your full name",
//                 required: true,
//             },
//             {
//                 id: "q2",
//                 type: "radio",
//                 label: "Question 2: What is your age group?",
//                 options: [
//                     "Under 18",
//                     "18 – 21",
//                     "22 – 25",
//                     "26 – 30",
//                     "31 and above",
//                 ],
//             },
//             {
//                 id: "q3",
//                 type: "radio",
//                 label: "Question 3: What best describes your current status?",
//                 options: [
//                     "School Student",
//                     "Undergraduate Student",
//                     "Postgraduate Student",
//                     "Working Professional",
//                     "Startup Founder / Entrepreneur",
//                     "Freelancer / Digital Creator",
//                     "Self-Learner / Skill Builder",
//                 ],
//             },
//             {
//                 id: "q4",
//                 type: "radio",
//                 label: "Question 4: What is your primary field?",
//                 options: [
//                     "Engineering / Technology",
//                     "Business / Finance / MBA",
//                     "Design / Creative Arts",
//                     "Medicine / Healthcare",
//                     "Law",
//                     "Commerce / Accounting",
//                     "Humanities / Social Sciences",
//                     "Other",
//                 ],
//             },
//             {
//                 id: "q5",
//                 type: "radio",
//                 label: "Question 5: Where are you based?",
//                 options: [
//                     "Metro City",
//                     "Tier 2 City",
//                     "Tier 3 City or Town",
//                     "Outside India",
//                 ],
//             },
//         ],
//     },