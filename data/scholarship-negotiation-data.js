// IvyAmbition — Scholarship Negotiation Database
// Per-school historical negotiation patterns, leverage schools, typical bumps
// statsTier: "top" = above school's 75th LSAT, "mid" = within 50th-75th,
//            "median" = near median, "below" = below median
// scholarshipByTier: estimated scholarship $ range by applicant stats tier
// leverageSchools: peer schools that aid in negotiation (by USNWR proximity)
// avgNegotiationBump: typical additional $ achieved via negotiation
// negotiationSuccessRate: % of students who receive increases after negotiating
// negotiationNotes: school-specific tips

const SCHOLARSHIP_NEGOTIATION = [

{id:1,schoolName:"Yale Law School",usnwrRank:1,
scholarshipByTier:{top:[40000,72750],mid:[20000,45000],median:[0,20000],below:[0,0]},
avgNegotiationBump:8000,negotiationSuccessRate:25,
leverageSchools:["Harvard Law School","Stanford Law School"],
negotiationNotes:"Yale rarely offers merit scholarships; most aid is need-based. LRAP is robust. Negotiation has minimal impact. Focus on demonstrating PI intent to unlock LRAP.",
bestScript:"I am deeply honored by my admission to Yale. I have also received generous merit funding from [HLS/SLS]. While Yale is my first choice for its [specific program], I wanted to share this information in hopes the financial aid office could revisit my package."},

{id:2,schoolName:"Harvard Law School",usnwrRank:3,
scholarshipByTier:{top:[40000,72450],mid:[20000,40000],median:[10000,25000],below:[0,10000]},
avgNegotiationBump:10000,negotiationSuccessRate:30,
leverageSchools:["Stanford Law School","Yale Law School","Columbia Law School"],
negotiationNotes:"Harvard has increased merit aid significantly since 2020. Stats in top 10% of class can expect 50-75% tuition. Competing offer from Stanford is most effective leverage.",
bestScript:"I received an offer of admission and scholarship from [Stanford/Yale]. Harvard remains my top choice because of [HLS clinics/specific faculty]. I am writing to inquire whether the HLS Financial Aid Office is able to reconsider my merit scholarship in light of this competing offer."},

{id:3,schoolName:"Stanford Law School",usnwrRank:2,
scholarshipByTier:{top:[40000,72828],mid:[20000,40000],median:[10000,25000],below:[0,10000]},
avgNegotiationBump:9000,negotiationSuccessRate:28,
leverageSchools:["Harvard Law School","Yale Law School","Columbia Law School"],
negotiationNotes:"Stanford values demonstrated California/tech/Bay Area interest. LRAP is excellent. Leverage Harvard or Yale offers. Email Dean of Admissions directly.",
bestScript:"Stanford has been my first choice since [specific reason]. I received a scholarship of $[X] from [competing school]. I hope Stanford might match or increase my current award given my strong interest in attending."},

{id:4,schoolName:"Columbia Law School",usnwrRank:4,
scholarshipByTier:{top:[45000,72750],mid:[25000,45000],median:[10000,25000],below:[0,10000]},
avgNegotiationBump:15000,negotiationSuccessRate:45,
leverageSchools:["NYU School of Law","University of Pennsylvania Carey Law School","University of Michigan Law School"],
negotiationNotes:"Columbia is one of the most negotiation-friendly T14 schools. Competing NYU offers are the most effective lever. Strong career interest in NYC BigLaw can also help. Average bump of $15K documented.",
bestScript:"I have been admitted to Columbia Law School and it is among my top choices. I recently received a scholarship of $[X] from NYU/Penn/Michigan. Columbia's [specific program] is exceptional and I am hoping the admissions office can help bridge the gap between these two offers."},

{id:5,schoolName:"NYU School of Law",usnwrRank:6,
scholarshipByTier:{top:[40000,70000],mid:[22000,40000],median:[10000,22000],below:[0,10000]},
avgNegotiationBump:12000,negotiationSuccessRate:42,
leverageSchools:["Columbia Law School","University of Pennsylvania Carey Law School","University of Chicago Law School"],
negotiationNotes:"NYU's merit scholarship program (named scholarships) is competitive but negotiable. Root-Tilden-Kern scholarships are renewable but non-negotiable. General merit aid is negotiable with CLS/Chicago offers.",
bestScript:"NYU is my first choice for [public interest/IP/clinical program]. I have a competing offer of $[X] from Columbia/Penn/Chicago. I would be grateful if the Financial Aid Office could reconsider my package in light of this scholarship."},

{id:6,schoolName:"University of Pennsylvania Carey Law School",usnwrRank:7,
scholarshipByTier:{top:[40000,68000],mid:[20000,40000],median:[10000,20000],below:[0,10000]},
avgNegotiationBump:14000,negotiationSuccessRate:48,
leverageSchools:["Columbia Law School","NYU School of Law","Duke University School of Law"],
negotiationNotes:"Penn is quite receptive to negotiation. Named scholarships (Penn Law Scholars) may be bumped. CLS/NYU/Duke offers are effective leverage. In-person visits during Admitted Students Day help.",
bestScript:"Penn Law is my top choice and I am thrilled with my admission. I have received $[X] from [Columbia/NYU/Duke]. My financial situation makes this gap significant. I hope we can discuss whether Penn can increase my award."},

{id:7,schoolName:"Duke University School of Law",usnwrRank:12,
scholarshipByTier:{top:[38000,65000],mid:[18000,38000],median:[8000,18000],below:[0,8000]},
avgNegotiationBump:16000,negotiationSuccessRate:50,
leverageSchools:["University of Pennsylvania Carey Law School","University of Michigan Law School","University of Virginia School of Law"],
negotiationNotes:"Duke is highly negotiation-friendly and openly encourages applicants to share competing offers. Named scholarships (Duke Scholars) can be bumped. Peer school offers from Virginia, Penn, Michigan are most effective.",
bestScript:"Duke Law is my first choice school. I have received a scholarship of $[X] from [Penn/Michigan/Virginia]. Given Duke's incredible [specific program/clinic], I am hoping the admissions team can work with me on the financial package."},

{id:8,schoolName:"University of Michigan Law School",usnwrRank:8,
scholarshipByTier:{top:[38000,62000],mid:[18000,38000],median:[8000,18000],below:[0,8000]},
avgNegotiationBump:15000,negotiationSuccessRate:50,
leverageSchools:["Duke University School of Law","University of Virginia School of Law","Cornell Law School"],
negotiationNotes:"Michigan explicitly acknowledges that they compete with peer schools for top applicants. Duke/Virginia/Cornell offers are best leverage. Presidential Scholarships are non-negotiable but base merit aid is.",
bestScript:"Michigan Law has been my first choice for [specific reason]. I have received a scholarship of $[X] from [Duke/Virginia/Cornell]. As someone committed to [specific career], Michigan's [program] is where I want to be. I hope you can consider a scholarship increase."},

{id:9,schoolName:"University of Virginia School of Law",usnwrRank:8,
scholarshipByTier:{top:[38000,65000],mid:[18000,38000],median:[8000,18000],below:[0,8000]},
avgNegotiationBump:16000,negotiationSuccessRate:52,
leverageSchools:["Duke University School of Law","University of Michigan Law School","Vanderbilt University Law School"],
negotiationNotes:"UVA is one of the most negotiation-receptive schools. Darden Partnership scholarships are prestigious. Written letter + phone call follow-up is recommended. Duke/Michigan are the best leverage schools.",
bestScript:"Virginia Law is my top choice and I am deeply excited about the community. I have received a scholarship of $[X] from [Duke/Michigan]. I am writing to respectfully request a reconsideration of my merit award, which would make attending Virginia a clearer financial decision."},

{id:10,schoolName:"Northwestern Pritzker School of Law",usnwrRank:10,
scholarshipByTier:{top:[40000,70000],mid:[20000,40000],median:[10000,20000],below:[0,10000]},
avgNegotiationBump:15000,negotiationSuccessRate:45,
leverageSchools:["University of Michigan Law School","Washington University School of Law","Vanderbilt University Law School"],
negotiationNotes:"Northwestern values work experience; 2YL format graduates may have distinct leverage. Competing offers from Michigan/Vanderbilt/WashU effective. LRAP is solid for PI career paths.",
bestScript:"Northwestern Law is my top choice for [business law/corporate focus/Chicago market]. I have a competing scholarship of $[X] from [Michigan/Vanderbilt]. I hope the admissions team can bridge this gap so I can commit to Northwestern."},

{id:11,schoolName:"Cornell Law School",usnwrRank:13,
scholarshipByTier:{top:[38000,66000],mid:[18000,38000],median:[8000,18000],below:[0,8000]},
avgNegotiationBump:16000,negotiationSuccessRate:52,
leverageSchools:["Vanderbilt University Law School","Washington University School of Law","University of Minnesota Law School"],
negotiationNotes:"Cornell actively competes with peer schools in T14 lower tier. Vanderbilt/WashU/Georgetown offers are effective leverage. Small class size means each admit matters significantly.",
bestScript:"Cornell Law is where I want to be for [specific reason]. I have received a significant scholarship from [Vanderbilt/WashU/Georgetown]. I hope Cornell might revisit my award—my first choice is clear but the financial gap is real."},

{id:12,schoolName:"Georgetown University Law Center",usnwrRank:14,
scholarshipByTier:{top:[35000,60000],mid:[15000,35000],median:[5000,15000],below:[0,5000]},
avgNegotiationBump:12000,negotiationSuccessRate:40,
leverageSchools:["George Washington University Law School","Fordham University School of Law","University of Minnesota Law School"],
negotiationNotes:"Georgetown offers significant need and merit aid but negotiation is moderately effective. LRAP (LIPP) is exceptional and well-funded. GWU/Fordham/Minnesota best leverage. DC market access is Georgetown's main draw.",
bestScript:"Georgetown's LIPP program and DC access make it my top choice for public interest law. I have a scholarship of $[X] from [GWU/Fordham]. I am hoping Georgetown can increase my award to make this financially feasible."},

{id:13,schoolName:"Vanderbilt University Law School",usnwrRank:17,
scholarshipByTier:{top:[40000,68000],mid:[22000,42000],median:[12000,25000],below:[0,12000]},
avgNegotiationBump:18000,negotiationSuccessRate:58,
leverageSchools:["Washington University School of Law","University of Minnesota Law School","Boston University School of Law"],
negotiationNotes:"Vanderbilt is the most negotiation-friendly of the T20 schools. Full scholarships are available for top stats. WashU/Minnesota/Emory are strong leverage schools. Written email + follow-up call highly effective.",
bestScript:"Vanderbilt Law is my top choice and I have been so impressed with the community. I received a scholarship of $[X] from [WashU/Minnesota]. I am writing to see if Vanderbilt can match or approach this offer—I would commit immediately."},

{id:14,schoolName:"Washington University School of Law",usnwrRank:18,
scholarshipByTier:{top:[50000,74000],mid:[30000,52000],median:[15000,30000],below:[0,15000]},
avgNegotiationBump:20000,negotiationSuccessRate:62,
leverageSchools:["Vanderbilt University Law School","Emory University School of Law","University of Notre Dame Law School"],
negotiationNotes:"WashU is known for extraordinarily generous merit scholarships (sometimes full tuition) and high negotiation success rates. Top stats yield near-full tuition. Vanderbilt/Emory/Notre Dame are best leverage.",
bestScript:"WashU Law is my top choice for [specific reason]. I received an offer of $[X] from [Vanderbilt/Emory]. WashU's generosity with scholarships is well-known, and I hope to discuss whether my offer can be improved."},

{id:15,schoolName:"Emory University School of Law",usnwrRank:24,
scholarshipByTier:{top:[45000,68000],mid:[25000,45000],median:[12000,25000],below:[0,12000]},
avgNegotiationBump:18000,negotiationSuccessRate:56,
leverageSchools:["Vanderbilt University Law School","Washington University School of Law","University of Alabama School of Law"],
negotiationNotes:"Emory is generous and receptive. Top LSAT applicants regularly receive near-full scholarships. WashU/Vanderbilt offers are most effective. Atlanta market access is a draw worth mentioning.",
bestScript:"Emory has been a top choice for me given Atlanta's growing legal market and [specific program]. I received $[X] from [WashU/Vanderbilt]. I hope Emory can increase my scholarship to facilitate my enrollment."},

{id:16,schoolName:"University of Texas School of Law",usnwrRank:15,
scholarshipByTier:{top:[25000,55000],mid:[12000,25000],median:[5000,12000],below:[0,5000]},
avgNegotiationBump:10000,negotiationSuccessRate:38,
leverageSchools:["SMU Dedman School of Law","University of Houston Law Center","University of Arizona James E. Rogers College of Law"],
negotiationNotes:"Texas Law is moderately negotiation-friendly. Strong in-state pipeline makes it competitive. SMU/Houston offers help but less effective than top-tier peer offers. Texas is a great value even without negotiation.",
bestScript:"UT Law is my top choice for practicing in the Texas market. I have a scholarship of $[X] from [SMU/Houston]. I hope Texas can revisit my award given my strong interest in contributing to the Texas law community."},

{id:17,schoolName:"University of California Los Angeles School of Law",usnwrRank:15,
scholarshipByTier:{top:[25000,50000],mid:[10000,25000],median:[0,10000],below:[0,0]},
avgNegotiationBump:8000,negotiationSuccessRate:32,
leverageSchools:["University of Southern California Gould School of Law","UC Hastings College of the Law","Pepperdine Caruso School of Law"],
negotiationNotes:"As a public school, UCLA's merit aid is limited. Endowed fellowships are awarded based on stats. Need-based aid is more significant. USC/Pepperdine offers provide some leverage.",
bestScript:"UCLA Law is my first choice for [public interest/entertainment/California market]. I have a scholarship of $[X] from USC/Pepperdine. I hope UCLA's financial aid office can revisit my package."},

{id:18,schoolName:"University of Southern California Gould School of Law",usnwrRank:20,
scholarshipByTier:{top:[42000,68000],mid:[22000,42000],median:[10000,22000],below:[0,10000]},
avgNegotiationBump:17000,negotiationSuccessRate:52,
leverageSchools:["UCLA School of Law","University of California Berkeley School of Law","Pepperdine Caruso School of Law"],
negotiationNotes:"USC Gould is generous and receptive to negotiation. UCLA/Berkeley competing offers are most effective. Entertainment and real estate law draws are worth mentioning for those interested in those fields.",
bestScript:"USC Gould is my top choice for [entertainment/corporate] law in LA. I received $[X] from [UCLA/Berkeley]. I hope USC can match or approach this offer given my strong desire to be in the Gould community."},

{id:19,schoolName:"University of Notre Dame Law School",usnwrRank:22,
scholarshipByTier:{top:[45000,67000],mid:[25000,45000],median:[12000,25000],below:[0,12000]},
avgNegotiationBump:17000,negotiationSuccessRate:55,
leverageSchools:["Washington University School of Law","Vanderbilt University Law School","University of Alabama School of Law"],
negotiationNotes:"Notre Dame is very receptive to negotiation and provides merit scholarships to most admitted students. Top stats = near-full tuition. WashU/Vandy/Alabama with full scholarships are best leverage.",
bestScript:"Notre Dame Law is my top choice for [specific program/values alignment]. I have a competing scholarship of $[X] from [WashU/Vanderbilt]. I hope Notre Dame can help me make this decision easier."},

{id:20,schoolName:"University of Minnesota Law School",usnwrRank:21,
scholarshipByTier:{top:[38000,62000],mid:[20000,38000],median:[10000,20000],below:[0,10000]},
avgNegotiationBump:16000,negotiationSuccessRate:52,
leverageSchools:["University of Wisconsin Law School","University of Iowa College of Law","University of Illinois College of Law"],
negotiationNotes:"Minnesota is highly negotiation-friendly. Named scholarships are common. Peer Midwest schools are good leverage. Minnesota's value proposition in the Twin Cities market is strong.",
bestScript:"Minnesota Law is my first choice for [specific reason / Midwest market]. I received $[X] from [Wisconsin/Iowa/Illinois]. I hope Minnesota can increase my scholarship to make this an easy decision."},

{id:21,schoolName:"Boston University School of Law",usnwrRank:27,
scholarshipByTier:{top:[42000,65000],mid:[22000,42000],median:[10000,22000],below:[0,10000]},
avgNegotiationBump:17000,negotiationSuccessRate:53,
leverageSchools:["Boston College Law School","Northeastern University School of Law","Fordham University School of Law"],
negotiationNotes:"BU Law is receptive to negotiation. Boston College offers are most effective. Finance/corporate draws worth mentioning. Named fellowships can sometimes be bumped. Written request + follow-up recommended.",
bestScript:"BU Law is my top choice for Boston market access and [specific program]. I have received $[X] from [BC/Fordham]. I hope BU can bridge the gap to make enrollment possible."},

{id:22,schoolName:"Boston College Law School",usnwrRank:30,
scholarshipByTier:{top:[42000,63000],mid:[20000,42000],median:[10000,20000],below:[0,10000]},
avgNegotiationBump:16000,negotiationSuccessRate:52,
leverageSchools:["Boston University School of Law","Fordham University School of Law","George Washington University Law School"],
negotiationNotes:"BC Law is generous and will often match or approach BU offers. BU is the most effective leverage school. Public interest LRAP is solid. Negotiating at Admitted Students Day in person often yields results.",
bestScript:"BC Law is where I want to be for [public interest/Boston market]. I received $[X] from [BU/Fordham]. I am hoping BC can match or increase my award to make the decision easier."},

{id:23,schoolName:"Fordham University School of Law",usnwrRank:36,
scholarshipByTier:{top:[42000,64000],mid:[22000,42000],median:[10000,22000],below:[0,10000]},
avgNegotiationBump:18000,negotiationSuccessRate:55,
leverageSchools:["Cardozo School of Law","George Washington University Law School","Brooklyn Law School"],
negotiationNotes:"Fordham is known for negotiation success. NYC-based peer schools (Cardozo, Brooklyn) provide strong leverage. Full scholarships exist for top stats. Written appeal is standard and expected.",
bestScript:"Fordham Law is my top choice for the New York legal market and [specific program]. I received $[X] from [Cardozo/GWU/Brooklyn]. Fordham's reputation and placement make it my first choice—I hope you can improve my scholarship."},

{id:24,schoolName:"George Washington University Law School",usnwrRank:26,
scholarshipByTier:{top:[40000,65000],mid:[20000,40000],median:[8000,20000],below:[0,8000]},
avgNegotiationBump:16000,negotiationSuccessRate:50,
leverageSchools:["Georgetown University Law Center","American University Washington College of Law","Fordham University School of Law"],
negotiationNotes:"GWU is receptive to negotiation given competition with Georgetown and other DC schools. Government/regulatory career interest worth mentioning. Georgetown competing offers most effective.",
bestScript:"GWU Law is my top choice for [regulatory/government/DC practice]. I received $[X] from [Georgetown/AU]. I am hoping GWU can revisit my award given my strong commitment to Washington DC practice."},

{id:25,schoolName:"University of Alabama School of Law",usnwrRank:27,
scholarshipByTier:{top:[50000,74000],mid:[30000,52000],median:[15000,30000],below:[5000,15000]},
avgNegotiationBump:20000,negotiationSuccessRate:65,
leverageSchools:["University of Georgia School of Law","University of Tennessee College of Law","University of Mississippi School of Law"],
negotiationNotes:"Alabama is one of the most generous scholarship schools in the country. Full tuition scholarships are common for above-median stats. Exceptional value for Southeast-focused students. High negotiation success rate.",
bestScript:"Alabama Law is a fantastic value and my top choice for [Southeast market]. I received $[X] from [Georgia/Tennessee]. Alabama's reputation for generosity makes me hopeful you can further increase my award."},

];

// ─── Negotiation Templates ──────────────────────────────────────────────────
const NEGOTIATION_TEMPLATES = {
  email: `Subject: Scholarship Reconsideration Request — [Your Name], [Year] J.D. Candidate

Dear Dean [Name] / Financial Aid Office,

I am writing to respectfully request a reconsideration of my merit scholarship award for the [Year] entering class.

I was thrilled to receive admission to [School Name] and am very interested in attending. [School] is my [first/top] choice because of [specific program, clinic, faculty member, career access].

I have also received admission and scholarship offers from [Competing School 1] ($[Amount]/year) and [Competing School 2] ($[Amount]/year). While [Your School] remains my preferred choice for the reasons above, these competing offers present a significant financial consideration.

I am hoping the Financial Aid Office might be able to revisit my merit award in light of these competing offers. I would be grateful for any increase you can provide, as it would make [School Name] the clear choice.

I am happy to provide any additional documentation. Thank you for your time and consideration.

Respectfully,
[Your Name]
[Phone Number]
[Email]
Applicant ID: [LSAC Number]`,

  followUp: `Subject: Following Up — Scholarship Reconsideration ([Your Name])

Dear Dean [Name],

I wanted to follow up on my scholarship reconsideration request from [Date]. I remain deeply interested in attending [School Name] and believe the [specific program/clinic/career path] aligns perfectly with my goals.

If the Financial Aid Office has had an opportunity to review my request, I would welcome the chance to discuss. I am also happy to schedule a call at your convenience.

Thank you again for your time and consideration.

Respectfully,
[Your Name]`,

  acceptOffer: `Subject: Scholarship Award Confirmation — [Your Name]

Dear Dean [Name],

Thank you so much for reconsidering my merit scholarship. The increase of $[Amount] makes attending [School Name] possible, and I am thrilled to commit.

I look forward to joining the [School] community in the fall. Please let me know if there is anything I need to submit to formalize my enrollment.

With gratitude,
[Your Name]`
};

// ─── General Negotiation Tips ───────────────────────────────────────────────
const NEGOTIATION_TIPS = [
  "Always have a real competing offer — never bluff. Schools verify.",
  "Submit your negotiation request as early as possible (March–April is best).",
  "Be specific about why the school is your first choice — generic emails get ignored.",
  "Follow up by phone 7–10 days after your email if you haven't heard back.",
  "Attend Admitted Students Day — in-person conversations often yield better results.",
  "Named/endowed scholarships may have conditions — ask if increases change requirements.",
  "Keep your tone grateful and professional, not demanding.",
  "Schools with lower USNWR rankings than the competing school are more likely to match.",
  "Your leverage is strongest before the deposit deadline.",
  "Request extensions if you need more time to compare offers — most schools grant them."
];

// ─── Leverage School Pairs (best negotiation combos) ───────────────────────
const LEVERAGE_PAIRS = [
  {school:"Columbia Law School", bestLeverage:"NYU School of Law", note:"Columbia-NYU is the most powerful negotiation pair in the T14."},
  {school:"NYU School of Law", bestLeverage:"Columbia Law School", note:"NYU-Columbia works both ways with similar success rates."},
  {school:"Duke University School of Law", bestLeverage:"University of Virginia School of Law", note:"Duke-UVA is a classic pairing; both schools actively compete for the same students."},
  {school:"University of Virginia School of Law", bestLeverage:"Duke University School of Law", note:"Duke offers are Duke's most effective counter-offer tool at UVA."},
  {school:"Vanderbilt University Law School", bestLeverage:"Washington University School of Law", note:"WashU's full-tuition scholarships are Vanderbilt's biggest competitor."},
  {school:"Cornell Law School", bestLeverage:"Vanderbilt University Law School", note:"Vanderbilt's generosity makes it ideal leverage against Cornell."},
  {school:"Georgetown University Law Center", bestLeverage:"George Washington University Law School", note:"GWU is the classic Georgetown leverage school in DC."},
  {school:"Boston University School of Law", bestLeverage:"Boston College Law School", note:"Boston's two top law schools frequently negotiate against each other."},
  {school:"Fordham University School of Law", bestLeverage:"Cardozo School of Law", note:"Fordham-Cardozo is a common NYC negotiation pair."},
  {school:"University of Southern California Gould School of Law", bestLeverage:"UCLA School of Law", note:"UCLA is the best leverage for USC in the LA market."}
];
