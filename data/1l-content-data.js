// ════════════════════════════════════════════════════════════════
// IvyAmbition 1L Content Data — 1l-content-data.js
// Course outline frameworks and attack sheets for all 1L courses
// ════════════════════════════════════════════════════════════════

const COURSE_OUTLINES = {

  contracts: {
    title: 'Contracts',
    icon: '📝',
    description: 'Formation, performance, breach, defenses, and remedies under common law and UCC Article 2.',
    sections: [
      {
        title: 'I. Threshold Issue: Does UCC Article 2 Apply?',
        content: `Apply UCC Article 2 to transactions in **goods** (tangible, movable items). Apply common law to service contracts and real estate. Hybrid/mixed contracts: majority rule applies the law of the "predominant purpose." Merchants receive heightened obligations under UCC (merchants = those who deal in goods of the kind or hold themselves out as having special knowledge).`
      },
      {
        title: 'II. Contract Formation',
        subsections: [
          {
            heading: 'A. Offer',
            content: `An offer is a manifestation of willingness to enter into a bargain, communicated to an offeree, with sufficient definiteness that the offeree's acceptance will close the deal.\n\n**Definiteness:** Must contain material terms. Common law requires: parties, subject matter, price, and quantity. UCC is more lenient — quantity is the critical term; courts imply reasonable price.\n\n**Communication:** Must be communicated to the offeree. Advertisements generally not offers (they invite offers) unless they specify quantity and are definite enough (e.g., "First come, first served").\n\n**Termination of Offer:** Revocation (before acceptance, unless option or firm offer); rejection or counter-offer; lapse of stated or reasonable time; death/incapacity; illegality.`
          },
          {
            heading: 'B. Acceptance',
            content: `**Mirror Image Rule (common law):** Acceptance must be the mirror image of the offer — any deviation is a counter-offer and rejection.\n\n**Battle of the Forms (UCC 2-207):** A definite expression of acceptance operates as acceptance EVEN IF it states additional or different terms, unless acceptance is expressly conditioned on agreement to the new terms.\n- Additional terms: Between merchants → become part of the contract UNLESS the offer expressly limits acceptance, the new terms materially alter the contract, or the offeror objects within reasonable time.\n- Different terms: Majority rule = knock-out (conflicting terms cancel each other; UCC gap-fillers substitute). Minority = additional terms rule applies.\n\n**Method of Acceptance:** Offeror is master of the offer. If unspecified, any reasonable means. Unilateral contracts accept by full performance (beginning is not acceptance, but offeror cannot revoke once performance begins).\n\n**Mailbox Rule:** Acceptance effective upon dispatch (when sent). Does NOT apply to options contracts or if offer specifies otherwise. Revocation effective upon receipt.`
          },
          {
            heading: 'C. Consideration',
            content: `Consideration requires: (1) a bargained-for exchange, and (2) what is given must be legally sufficient (either a benefit to the promisor or a detriment to the promisee).\n\n**Adequacy vs. Sufficiency:** Courts don't weigh adequacy (fairness) unless unconscionable. Must be legally sufficient (can't be pre-existing legal duty, illusory promise, or past consideration).\n\n**Pre-existing Duty Rule:** Promise to perform an existing legal duty is not consideration. Exceptions: (1) unforeseen circumstances (common law); (2) modification under UCC requires no new consideration.\n\n**Past Consideration:** Past acts not bargained-for are not consideration. Exception: Material Benefit Rule (minority) — moral obligation to pay for past benefit may be enforceable.\n\n**Promissory Estoppel (§90 RST):** Substitute for consideration. A promise is enforceable if: (1) promisor reasonably expected the promise to induce reliance; (2) promisee actually relied; and (3) injustice can only be avoided by enforcement. Damages may be limited to reliance interest.`
          }
        ]
      },
      {
        title: 'III. Defenses to Formation',
        subsections: [
          {
            heading: 'A. Statute of Frauds',
            content: `Contracts within the SOF must be in writing signed by the party to be charged:\n- Sale of goods ≥$500 (UCC) or ≥$1,000 (revised UCC)\n- Contracts for real property interests\n- Contracts not performable within 1 year from formation\n- Promises to pay another's debt (suretyship)\n- Contracts in consideration of marriage\n- Executor/administrator promises\n\n**UCC Exceptions:** Specially manufactured goods, admissions in court, performance (payment accepted or goods received/accepted). Between merchants: confirmatory memo rule — one merchant's written confirmation can satisfy SOF for both if other doesn't object within 10 days.\n\n**Part Performance (Real Property):** Takes oral contract out of SOF if: payment, possession, and improvements.`
          },
          {
            heading: 'B. Mutual Assent Defects',
            content: `**Mutual Mistake:** Both parties mistaken about a material fact at time of contract → voidable by adversely affected party UNLESS that party bears risk of mistake.\n\n**Unilateral Mistake:** Generally not a defense. Exception: if non-mistaken party knew or should have known of the mistake.\n\n**Fraud/Misrepresentation:** Fraudulent misrepresentation of material fact + justifiable reliance → contract voidable (tort remedies also available for fraud). Innocent misrepresentation → contract voidable but no tort damages.\n\n**Duress:** Physical/economic coercion that leaves no reasonable alternative → contract voidable.\n\n**Undue Influence:** Unfair persuasion by one who dominates or in relationship of confidence → voidable.\n\n**Incapacity:** Minors (voidable at minor's election upon reaching majority), mental incapacity (void if adjudicated; voidable if lack understanding), intoxication (voidable if other party had reason to know).`
          },
          {
            heading: 'C. Unconscionability',
            content: `UCC 2-302 and RST 2d §208: Court may refuse to enforce or limit unconscionable contract or term.\n\n**Procedural:** Unfairness in bargaining process — take-it-or-leave-it, fine print, no real choice (contracts of adhesion).\n\n**Substantive:** Unfairness in the resulting contract — oppressively one-sided terms.\n\nMost courts require both, but some allow either alone. Assessed at time of formation, not at breach.`
          }
        ]
      },
      {
        title: 'IV. Conditions',
        content: `A condition is an event that must occur before a party has a duty to perform.\n\n**Express vs. Implied:** Express conditions strictly enforced; implied (constructive) conditions — courts more flexible, may excuse by substantial performance.\n\n**Precedent vs. Subsequent:** Condition precedent — must occur before duty arises. Condition subsequent — occurrence extinguishes existing duty. (Distinction matters for burdens of pleading.)\n\n**Concurrent Conditions:** Both parties must tender performance simultaneously (e.g., exchange at real estate closing).\n\n**Excuse of Condition:** Waiver (voluntary relinquishment); estoppel (reasonable reliance); prevention (party prevents condition from occurring = condition excused); substantial performance (constructive conditions).`
      },
      {
        title: 'V. Performance and Breach',
        subsections: [
          {
            heading: 'A. Material vs. Minor Breach',
            content: `**Material Breach:** Non-breaching party may withhold performance and sue for total damages. Factors (RST 2d §241): extent of non-performance, adequacy of money damages, forfeiture by breaching party, likelihood of cure, good faith and fair dealing.\n\n**Minor Breach:** Non-breaching party must continue performance but may sue for partial damages. Substantial performance doctrine — breaching party has substantially performed if there is no material breach (common law only; UCC has perfect tender rule).\n\n**Perfect Tender Rule (UCC):** Buyer can reject for any nonconformity. Seller has right to cure if time for performance hasn't expired. Installment contracts: can only reject installment if impairs value of that installment; can cancel whole contract if impairs value of the whole.`
          },
          {
            heading: 'B. Anticipatory Repudiation',
            content: `Definite and unequivocal statement by promisor before performance is due that they won't perform → treated as immediate breach.\n\nNon-breaching party can: (1) treat as immediate breach and sue now; (2) suspend performance and wait; (3) urge retraction.\n\n**Retraction:** Repudiating party can retract until non-breaching party has materially changed position or treats repudiation as final.\n\n**UCC Adequate Assurance:** Either party may demand in writing adequate assurance of performance if they have reasonable grounds for insecurity. Failure to provide within reasonable time (max 30 days) = repudiation.`
          }
        ]
      },
      {
        title: 'VI. Excuse of Performance',
        content: `**Impossibility (traditional):** Performance objectively impossible — death/incapacity of person essential to contract; destruction of subject matter essential to contract; supervening illegality.\n\n**Impracticability (modern/UCC):** Occurrence of contingency whose non-occurrence was basic assumption of contract AND impracticability was not fault of party. Risk allocation may apply.\n\n**Frustration of Purpose:** Purpose of contract is substantially frustrated; purpose was basic assumption; non-occurrence of frustrating event was assumed; neither party at fault. (Coronation cases).\n\n**Note:** Courts rarely excuse for impracticability/frustration — threshold is very high.`
      },
      {
        title: 'VII. Remedies',
        subsections: [
          {
            heading: 'A. Expectation Damages (Default)',
            content: `Put non-breaching party in position they'd have been in if contract had been performed.\n\n**Formula:** Expectation = Loss in value + Other losses (incidental/consequential) − Costs saved (avoided).\n\n**Consequential Damages (Hadley v. Baxendale):** Recoverable only if breaching party had reason to foresee at time of contracting. Hadley 1st rule: naturally arising from breach. Hadley 2nd rule: special circumstances communicated to breaching party.\n\n**Certainty:** Damages must be proved with reasonable certainty. New business rule — new businesses may struggle to prove lost profits with certainty.\n\n**Mitigation:** Non-breaching party must take reasonable steps to mitigate damages. Failure to mitigate reduces recovery by amount that could have been avoided.`
          },
          {
            heading: 'B. Reliance Damages',
            content: `Put non-breaching party back in position before contract was entered. Covers out-of-pocket expenditures made in reliance on the contract. Used when expectation damages are too speculative, or in promissory estoppel claims.`
          },
          {
            heading: 'C. Restitution',
            content: `Prevents unjust enrichment. Restore benefit conferred on breaching party. Available even when contract is unenforceable. Breaching plaintiff may also get restitution for benefit conferred, minus damages caused by breach.`
          },
          {
            heading: 'D. UCC Seller/Buyer Remedies',
            content: `**Seller's Remedies:** Withhold delivery; stop delivery in transit; identify goods to contract; resell + sue for difference; sue for contract price (if resale not possible); sue for lost profits.\n\n**Buyer's Remedies:** Cover (buy substitute + sue for difference); sue for market price − contract price; specific performance (goods are unique or no adequate remedy at law); recover identified goods in seller's insolvency; cancel contract.`
          }
        ]
      }
    ]
  },

  torts: {
    title: 'Torts',
    icon: '⚖️',
    description: 'Negligence, intentional torts, strict liability, and products liability.',
    sections: [
      {
        title: 'I. Negligence',
        subsections: [
          {
            heading: 'A. Duty',
            content: `General rule: You must exercise reasonable care when your conduct creates a foreseeable risk of harm to others.\n\n**Foreseeability:** Cardozo (majority) — duty only to foreseeable plaintiffs in zone of danger. Andrews (minority) — duty to all; proximate cause limits recovery.\n\n**Special Relationships:** Common carrier/passenger, innkeeper/guest, landowner/invitee, employer/employee, jailor/prisoner, school/student, hospital/patient — affirmative duty to act.\n\n**Nonfeasance:** No general duty to rescue/act (distinguish misfeasance from nonfeasance). Exceptions: special relationships; creation of peril; undertaking rescue (if you start, must exercise reasonable care).\n\n**Premises Liability (Traditional):** Trespasser — no duty except don't willfully injure; wanton/reckless on known trespasser. Licensee (social guest) — duty to warn of known dangers. Invitee (business) — duty to inspect and warn/repair. Majority modern trend: abolish categories, use reasonable care to all entrants.`
          },
          {
            heading: 'B. Breach (Standard of Care)',
            content: `**Reasonable Person Standard:** Objective — what would a reasonably prudent person have done in the same circumstances.\n\n**Custom:** Custom is relevant evidence but not dispositive (T.J. Hooper — industry custom doesn't set the standard of care).\n\n**BPL Formula (Hand formula):** Negligence when Burden of precaution < Probability × Magnitude of Harm (B < PL).\n\n**Professional Standard:** Professionals (doctors, lawyers, architects) judged against professional community standard, not lay reasonable person. Locality rule for doctors (majority modernly abandoned in favor of national standard for specialists).\n\n**Children:** Judged against child of same age, intelligence, maturity. Exception: when child engages in adult activity (driving) → adult standard.\n\n**Negligence Per Se:** Violation of statute can establish breach if: plaintiff is member of class statute intended to protect, AND harm is of type statute intended to prevent. Statute violation = presumption of negligence in most states.`
          },
          {
            heading: 'C. Causation',
            content: `**Actual Cause (But-For):** Defendant's conduct was actual cause of plaintiff's harm if harm would not have occurred but for defendant's conduct.\n\n**Substantial Factor Test:** When multiple causes each independently sufficient (use when but-for test would exculpate both defendants). Either D's conduct a substantial factor in causing harm → both liable.\n\n**Burden Shifting (Summers v. Tice):** When two defendants negligent, unclear which caused harm → burden shifts to each to prove they didn't cause it. Market share liability (Sindell) — each defendant liable for market share when product fungible and impossible to identify which defendant's product caused harm.\n\n**Proximate Cause (Scope of Liability):** D's conduct is proximate cause if harm was a foreseeable result of D's negligence. NOT proximate if: unforeseeable harm; unforeseeable plaintiff; superseding cause.\n\n**Superseding Cause:** Independent, unforeseeable act that breaks causal chain. Note: foreseeable criminal acts and negligent rescuers are NOT superseding causes (D liable for aggravation).`
          },
          {
            heading: 'D. Damages',
            content: `Compensatory (economic + non-economic); eggshell plaintiff rule (D takes victim as found — liable for full damages even if victim unusually susceptible); punitive (actual malice or reckless indifference); collateral source rule (D cannot reduce damages by plaintiff's insurance recovery); no duty to mitigate personal injuries (but medical treatment unreasonably refused may cut off recovery).`
          }
        ]
      },
      {
        title: 'II. Defenses to Negligence',
        content: `**Contributory Negligence (minority/traditional):** Plaintiff's negligence = complete bar to recovery.\n\n**Comparative Fault (majority):** Pure — plaintiff recovers even if 99% at fault (reduced by fault %). Modified — plaintiff cannot recover if equally at fault (50% bar) or more than equally at fault (51% bar). Comparative fault spreads to all parties; joint and several liability or proportionate share depending on state.\n\n**Assumption of Risk:** Express — written/oral waiver (generally enforceable unless public policy concern). Implied — plaintiff voluntarily and knowingly encountered the risk. In comparative fault states, merged into comparative analysis.\n\n**Last Clear Chance:** In contributory negligence states only, plaintiff can recover if D had last clear chance to avoid harm despite plaintiff's negligence.`
      },
      {
        title: 'III. Intentional Torts',
        subsections: [
          {
            heading: 'A. Battery, Assault, IIED, False Imprisonment',
            content: `**Battery:** Intentional harmful or offensive contact with plaintiff's person. Consent is defense. "Person" extends to things closely connected to person (car, cane). Transferred intent applies among 5 classic torts.\n\n**Assault:** Intentional act causing reasonable apprehension of imminent harmful/offensive contact. Words alone generally insufficient (need overt act). Threatening to act in the future is not assault.\n\n**False Imprisonment:** Intentional confinement within bounded area without consent, using physical barriers, force, or threats. Must be no reasonable means of escape plaintiff knows about. Shopkeeper's privilege: reasonable detention to investigate theft.\n\n**IIED:** Intentional (or reckless) extreme and outrageous conduct causing severe emotional distress. "Outrageous" = conduct exceeds all bounds tolerated in civilized society. Common carrier/innkeeper owe higher duty. Third-party IIED: close family member present and D knows it.`
          },
          {
            heading: 'B. Property Torts',
            content: `**Trespass to Land:** Intentional physical invasion of plaintiff's land. No damage required. Extends to airspace and subsurface. Mistake of ownership no defense.\n\n**Trespass to Chattels:** Intentional intermeddling with plaintiff's personal property causing damage or dispossession. Damage or dispossession required (distinguish conversion).\n\n**Conversion:** Intentional act that is a serious interference with plaintiff's chattel that justifies requiring D to pay full market value. Factors: extent of interference, duration, intent, defendant's good faith, harm.`
          }
        ]
      },
      {
        title: 'IV. Strict Liability',
        content: `**Abnormally Dangerous Activities:** Liability without fault for activities that: create high degree of risk of serious harm; risk cannot be eliminated by reasonable care; activity not of common usage; inappropriate for the location. (RST 2d §519-520). Examples: dynamite blasting, storing large quantities of water (Rylands v. Fletcher).\n\n**Animals:** Strict liability for wild animals always. Domestic animals: strict liability if owner knew or had reason to know of dangerous propensity ("one-bite rule" in some states). Dogs: many states strict liability statute.\n\n**Defenses:** Assumption of risk generally available; contributory/comparative fault varies.`
      },
      {
        title: 'V. Products Liability',
        content: `Three theories: **Strict Liability** (RST 2d §402A); **Negligence**; **Warranty** (implied warranty of merchantability under UCC).\n\n**Strict Liability (402A):** Seller in business of selling product; product in defective condition unreasonably dangerous; reaches user without substantial change; user injured. No privity required. **Manufacturing defect** — product deviates from intended design. **Design defect** — entire product line defectively designed; consumer expectations test OR risk-utility test (RST 3d). **Warning defect** — inadequate instructions or warnings; must be risk known/knowable at time of sale.\n\n**Negligence theory:** Uses standard negligence elements; plaintiff must show reasonable care not exercised.\n\n**Warranty theory:** Breach of implied warranty of merchantability; privity not required in many states for personal injury; limited by disclaimer and notice requirements.\n\n**Defenses:** Comparative fault (plaintiff's misuse/assumption); state of the art defense (design defects).`
      },
      {
        title: 'VI. Nuisance, Defamation, Privacy',
        content: `**Private Nuisance:** Substantial, unreasonable interference with plaintiff's use and enjoyment of land. Balance utility v. harm. Distinguish trespass (physical invasion) from nuisance (interference without physical invasion).\n\n**Public Nuisance:** Unreasonable interference with right common to public. Private plaintiff needs special injury to sue.\n\n**Defamation:** Defamatory statement of fact (not opinion); about plaintiff; published (communicated) to third party; causing damages. Public figure plaintiff must prove actual malice (NYT v. Sullivan). Private plaintiff in matter of public concern — at least negligence required. Slander per se (imputation of crime, loathsome disease, professional misconduct, sexual immorality) = presumed damages.\n\n**Privacy Torts (4 torts):** Intrusion on seclusion; appropriation of name/likeness; false light; public disclosure of private facts.`
      }
    ]
  },

  civpro: {
    title: 'Civil Procedure',
    icon: '⚖️',
    description: 'Federal civil procedure — jurisdiction, pleadings, discovery, and trial.',
    sections: [
      {
        title: 'I. Subject Matter Jurisdiction',
        subsections: [
          {
            heading: 'A. Federal Question (§1331)',
            content: `Federal court has jurisdiction if the claim arises under the Constitution, treaties, or laws of the United States. **Well-Pleaded Complaint Rule:** Federal question must appear on the face of plaintiff's complaint — cannot anticipate federal defense. Affirmative defenses and counterclaims don't create federal question jurisdiction.`
          },
          {
            heading: 'B. Diversity Jurisdiction (§1332)',
            content: `Requirements: (1) Complete diversity — no plaintiff can be same state as any defendant (Strawbridge rule); (2) Amount in controversy exceeds $75,000 (exclusive of interest and costs).\n\n**Citizenship:** Individual = domicile (physical presence + intent to remain). Corporation = state of incorporation AND principal place of business (Hertz — "nerve center" test = where high-level officers direct, control, coordinate). Unincorporated associations = citizenship of every member.\n\n**Amount in Controversy:** Plaintiff's good faith assertion controls unless impossible to recover that amount. Aggregation: single plaintiff vs. single defendant can aggregate claims; multiple plaintiffs cannot aggregate separate claims (unless one common undivided interest).`
          },
          {
            heading: 'C. Supplemental Jurisdiction (§1367)',
            content: `Federal court may exercise jurisdiction over state claims that form "part of the same case or controversy" (same common nucleus of operative fact) as the federal claim (§1367(a)). In diversity cases, §1367(b) bars supplemental jurisdiction over certain claims by plaintiffs that would destroy diversity. Courts have discretion to decline under §1367(c) if: novel state law issue; state claim substantially predominates; all federal claims dismissed.`
          }
        ]
      },
      {
        title: 'II. Personal Jurisdiction',
        subsections: [
          {
            heading: 'A. Traditional Bases',
            content: `**Physical presence** when served (Pennoyer). **Domicile.** **Consent** (express or implied by doing business). **Agent service.** Note: Burnham — physical presence service is constitutional even if defendant just passing through (tag jurisdiction).`
          },
          {
            heading: 'B. Long-Arm Statutes + Due Process',
            content: `State long-arm statute must first authorize jurisdiction, then must satisfy Due Process (14th Amendment).\n\n**International Shoe:** Minimum contacts + comporting with traditional notions of fair play and substantial justice. Contacts must be: purposeful availment (D intentionally availed itself of forum privileges), and claims must arise from or relate to those contacts OR be so substantial that general jurisdiction applies.\n\n**General Jurisdiction (Goodyear, Daimler):** Contacts so continuous and systematic that D is essentially at home. For corporations: principal place of business OR state of incorporation. Exceptional circumstances only beyond those.\n\n**Specific Jurisdiction:** Claim arises from defendant's purposeful contacts with forum. Stream of commerce (Asahi, McIntyre) — court divided; must be something more than placing in stream.\n\n**Reasonableness Factors (Burger King):** Burden on defendant; plaintiff's interest; forum's interest; efficiency; shared interests. Only in rare case does reasonableness override minimum contacts.`
          }
        ]
      },
      {
        title: 'III. Venue (§1391)',
        content: `Venue proper in any district where: (a)(1) all defendants reside, if all in same state; (a)(2) substantial part of events occurred or substantial part of property is situated; (a)(3) if no other district, any district with personal jurisdiction.\n\n**Transfer:** §1404(a) — transfer to any district where case could have been brought (convenience of parties/witnesses, interest of justice). §1406 — transfer from improper venue to proper. Transferee court applies its own law on substantive matters if §1404 transfer; transferor court's choice of law if §1406.\n\n**Forum Non Conveniens:** Discretionary dismissal where another forum is significantly more appropriate.`
      },
      {
        title: 'IV. Erie Doctrine',
        content: `In diversity cases, federal courts must apply state substantive law (Erie v. Tompkins). Apply federal procedural law.\n\n**Substance vs. Procedure:** Outcome-determinative test (Guaranty Trust) — if applying federal rule would alter outcome, apply state law. Balancing test (Byrd) — federal rule must prevail if there are affirmative countervailing federal interests. Twin aims of Erie (Hanna): (1) discourage forum shopping; (2) prevent inequitable administration of law.\n\n**Federal Rule Conflict (Hanna):** If valid Federal Rule of Civil Procedure on point, apply it (even if displaces state law) — FRCP takes precedence if it is a "direct collision" with state law and is valid under Rules Enabling Act (must not abridge, enlarge, or modify substantive rights).\n\n**State Common Law (no Rule conflict):** Apply Erie balancing: if outcome-determinative and would cause forum shopping, apply state law.`
      },
      {
        title: 'V. Pleadings',
        content: `**Complaint (Rule 8(a)):** Short and plain statement of: (1) grounds for jurisdiction; (2) claim showing entitlement to relief; (3) demand for relief.\n\n**Plausibility Standard (Twombly/Iqbal):** Complaint must state enough facts to state a plausible claim for relief. Not just possible — plausible on its face. Court does not accept legal conclusions as facts. Two-step: (1) identify pleadings that are conclusory; (2) do remaining facts plausibly state a claim?\n\n**Rule 12 Motions:** 12(b)(1) lack of SMJ; 12(b)(2) lack of PJ; 12(b)(3) improper venue; 12(b)(4)/(5) process; 12(b)(6) failure to state a claim; 12(b)(7) failure to join necessary party. Some 12(b) defenses waived if not included in first motion or answer (12(b)(2),(3),(4),(5) waived if not raised).\n\n**Answer (Rule 8(b),(c)):** Must admit, deny, or state lack of knowledge. Failure to deny = admitted. Must plead affirmative defenses (statute of limitations, res judicata, payment, etc.) or they're waived.\n\n**Rule 11:** Attorney signature certifies: not for improper purpose; claims warranted by law or nonfrivolous argument; factual contentions have evidentiary support. 21-day safe harbor before sanctions motion filed.`
      },
      {
        title: 'VI. Discovery (Rule 26)',
        content: `**Mandatory Disclosure (26(a)):** Initial disclosures — witnesses, documents, damages computation, insurance. Expert disclosures. Pretrial disclosures.\n\n**Scope (26(b)):** Any nonprivileged matter relevant to any party's claim or defense AND proportional to needs of case (proportionality added in 2015 amendment).\n\n**Privileged:** Attorney-client privilege; work product doctrine (attorney's mental impressions, opinions, trial strategy — absolute protection; other work product discoverable upon substantial need + undue hardship).\n\n**Tools:** Depositions (Rule 30 — 10 per side, 7 hours max); Interrogatories (Rule 33 — 25 per party); Document/ESI requests (Rule 34); Physical/mental exams (Rule 35 — court order, good cause); Requests for admission (Rule 36).\n\n**Sanctions (Rule 37):** Failure to comply with discovery order → sanctions (adverse inference instruction, striking pleadings, default, contempt). Spoliation sanctions for failure to preserve electronically stored information.`
      },
      {
        title: 'VII. Summary Judgment, Trial, Post-Trial',
        content: `**Summary Judgment (Rule 56):** No genuine dispute of material fact; moving party entitled to judgment as matter of law. Moving party burden: show no genuine issue. Once shown, burden shifts to non-moving party to designate specific facts showing genuine issue. Mere scintilla not enough — must be substantial.\n\n**JMOL (Rule 50):** Motion for judgment as a matter of law before verdict. Renewed JMOL (RJMOL) after verdict. Standard: reasonable jury could not return verdict for non-movant.\n\n**New Trial (Rule 59):** For manifest errors of law, incorrect jury instructions, newly discovered evidence, excessive/inadequate damages, or verdict against clear weight of evidence.\n\n**Claim Preclusion (Res Judicata):** Final judgment on the merits bars relitigation of same claim between same parties or those in privity. Claim = all rights arising from same transaction/occurrence (modern approach).\n\n**Issue Preclusion (Collateral Estoppel):** Issue actually litigated, decided, and necessary to judgment in prior action cannot be relitigated in subsequent action between same parties (or non-mutual offensive collateral estoppel in some states/federal courts).`
      }
    ]
  },

  crimlaw: {
    title: 'Criminal Law',
    icon: '🔍',
    description: 'Actus reus, mens rea, inchoate crimes, defenses, and homicide under MPC and common law.',
    sections: [
      {
        title: 'I. Elements of a Crime',
        subsections: [
          {
            heading: 'A. Actus Reus (Voluntary Act)',
            content: `Crime requires a **voluntary act** (or voluntary omission when there is a legal duty to act).\n\n**Voluntary:** Requires conscious exercise of will. Reflexes, acts during unconsciousness, sleepwalking, hypnosis are NOT voluntary.\n\n**Omission:** Duty to act arises from: statute; special relationship (parent/child, spouse); contract; voluntary assumption; creation of peril. Failure to act when duty exists = actus reus.\n\n**Status crimes:** Unconstitutional to criminalize mere status (Robinson v. California — can't criminalize being an addict).\n\n**MPC:** Act must be voluntary. Lists involuntary: reflex/convulsion; unconscious; hypnosis; movement not a product of the effort or determination of actor.`
          },
          {
            heading: 'B. Mens Rea',
            content: `**Common Law Levels:** Specific intent (requires actual intent to bring about result — e.g., burglary, murder 1st, attempt); General intent (awareness act is of a particular nature — e.g., battery, rape); Malice (deliberate disregard of known risk — e.g., arson, murder); Strict liability (no mens rea required — e.g., statutory rape, many regulatory offenses).\n\n**MPC (§2.02) — 4 Mental States:**\n- **Purpose:** Conscious object to engage in conduct or cause result\n- **Knowledge:** Aware that conduct is of that nature or that result is practically certain; willful blindness = knowledge\n- **Recklessness:** Conscious disregard of substantial and unjustifiable risk (default mens rea under MPC)\n- **Negligence:** Should be aware of substantial and unjustifiable risk (objective standard)\n\n**Strict Liability:** No mens rea required. Common in regulatory/public welfare offenses. Strict liability crimes do not allow mistake of fact defense.\n\n**Mistake of Fact:** Negates specific intent if honest mistake; negates general intent only if reasonable mistake. Mistake of law generally not a defense (except: specific reliance on official statement of law; where law requires knowledge of illegality).`
          }
        ]
      },
      {
        title: 'II. Homicide',
        subsections: [
          {
            heading: 'A. Common Law Homicide',
            content: `**Murder (Malice Aforethought):** Intent to kill; intent to cause grievous bodily harm; depraved heart (reckless indifference to life); felony murder.\n\n**First Degree:** Premeditated and deliberate killing. Some states: murder by specified means (poison, lying in wait, bomb).\n\n**Second Degree:** All murder not qualifying as first degree; includes depraved heart murders.\n\n**Felony Murder:** Killing during commission of inherently dangerous felony (BARRK: Burglary, Arson, Robbery, Rape, Kidnapping). Majority: co-felon liable even for killings by non-felon during felony. Limitations: agency theory; independent felony (merger doctrine — felony must be independent from the killing itself); in-furtherance rule.\n\n**Voluntary Manslaughter:** Intentional killing in heat of passion caused by adequate provocation (reasonable person would lose control). Four requirements: adequate provocation; actual provocation; no cooling off time; no cooling off by reasonable person. Words alone generally not adequate provocation.\n\n**Involuntary Manslaughter:** Killing through criminal negligence or during an unlawful act (misdemeanor manslaughter).`
          },
          {
            heading: 'B. MPC Homicide',
            content: `**Murder (§210.2):** Purposely or knowingly, OR recklessly manifesting extreme indifference to human life (equivalent to common law depraved heart), OR felony murder for specific felonies.\n\n**Manslaughter (§210.3):** Reckless killing; OR killing that would be murder but committed under extreme mental or emotional disturbance for which there is reasonable explanation (EMED defense — subjective/objective mix, broader than common law heat of passion).\n\n**Negligent Homicide (§210.4):** Negligent killing.`
          }
        ]
      },
      {
        title: 'III. Other Crimes',
        content: `**Larceny:** Trespassory taking and carrying away of another's personal property with intent to permanently deprive. "Continuing trespass" doctrine for theft by mistake.\n\n**Embezzlement:** Fraudulent conversion of another's property by person in lawful possession (created to fill gap left by larceny).\n\n**False Pretenses:** Obtaining title to another's property by false representation of material present or past fact with intent to defraud.\n\n**Robbery:** Larceny from the person by force or threat of force. Aggravated robbery (armed) in many states.\n\n**Extortion (Blackmail):** Obtaining property by threats of future harm (distinguish from robbery which is immediate).\n\n**Burglary (Common Law):** Breaking and entering the dwelling of another at nighttime with intent to commit a felony therein. Modern: any structure; any time; even partial entry.\n\n**Arson:** Malicious burning of the dwelling of another. Modern: extends to all buildings.\n\n**Assault and Battery:** Battery = unlawful application of force to another. Assault = attempt to commit battery or intentional creation of reasonable apprehension of imminent battery.`
      },
      {
        title: 'IV. Inchoate Crimes',
        subsections: [
          {
            heading: 'A. Attempt',
            content: `Mens rea: specific intent to complete the crime (even if crime has lower mens rea). Actus reus: act beyond mere preparation.\n\n**Common Law tests (proximity):** Last proximate act; physical proximity; dangerous proximity (Holmes — "how near to success").\n\n**MPC test — Substantial Step:** Act that is a substantial step in course of conduct planned to culminate in the crime AND strongly corroborative of criminal purpose.\n\n**Abandonment:** Common law — no defense once beyond preparation. MPC — complete and voluntary renunciation = defense (cannot be mere postponement or decision to wait for better opportunity).\n\n**Impossibility:** Legal impossibility = defense (what D intended wasn't a crime). Factual impossibility = not a defense. MPC largely abolishes impossibility defense.`
          },
          {
            heading: 'B. Conspiracy',
            content: `Agreement between two or more persons to commit a crime + an overt act in furtherance (most jurisdictions; MPC requires overt act only for misdemeanors).\n\n**Mens rea:** Specific intent to agree AND intent to achieve the object of the agreement. Knowledge that supplier's goods will be used for illegal purpose + substantial assistance to serious crime = conspiracy (Pinkerton liability).\n\n**Pinkerton Rule:** Co-conspirators liable for all reasonably foreseeable crimes committed in furtherance of conspiracy (majority rule). MPC rejects Pinkerton — must be personally liable.\n\n**Withdrawal:** Defense to subsequent crimes (Pinkerton liability) if: communicate withdrawal to all co-conspirators OR take affirmative action to thwart conspiracy. Does NOT retroactively undo conspiracy liability.\n\n**Wharton's Rule:** Where crime by definition requires two people (dueling, bigamy, incest, adultery), cannot charge both with conspiracy unless third party involved.`
          },
          {
            heading: 'C. Solicitation',
            content: `Asking, encouraging, or inducing another to commit a crime with intent that they commit it. Complete upon communication — irrelevant that the other person refuses or fails. Merger: if solicited person agrees → conspiracy; if completes crime → both liable as accomplices.`
          }
        ]
      },
      {
        title: 'V. Defenses',
        subsections: [
          {
            heading: 'A. Self-Defense',
            content: `Defendant must reasonably believe force necessary to prevent imminent unlawful bodily harm. Force must be proportionate. Deadly force only when facing deadly force. **Duty to Retreat (minority):** Must retreat if safely possible before using deadly force. **Stand Your Ground (majority):** No duty to retreat anywhere you have right to be.\n\nInitial aggressor: generally cannot claim self-defense (exceptions: withdrawal communicated + ignored; escalation by victim).\n\nMPC: Defendant's belief in necessity need only be reasonable (negligence standard).`
          },
          {
            heading: 'B. Insanity',
            content: `**M'Naghten (majority):** At time of crime, D had mental disease such that: didn't know nature/quality of act OR didn't know act was wrong.\n\n**Irresistible Impulse:** Adds to M'Naghten — D could not control conduct due to mental disease even if knew it was wrong.\n\n**MPC (ALI Test):** As a result of mental disease or defect, D lacked substantial capacity to: appreciate the criminality of conduct (cognitive prong) OR conform conduct to requirements of law (volitional prong). Most moderate standard.\n\n**Durham (product test):** Crime was product of mental disease — very broad; largely abandoned.`
          },
          {
            heading: 'C. Duress, Necessity, Intoxication',
            content: `**Duress:** Another person threatened imminent serious bodily harm to D or close family if D didn't commit crime. Not available for homicide in most states. MPC: available for all crimes but balanced against fault.\n\n**Necessity:** D chose lesser of two evils to prevent imminent harm. Natural forces (distinguish duress = human threat). Not available for homicide (most jurisdictions). MPC: harm avoided must outweigh harm caused.\n\n**Voluntary Intoxication:** Defense only to specific intent crimes (negates purpose/knowledge). Not a defense to general intent crimes, negligence, or recklessness (except MPC recklessness).\n\n**Involuntary Intoxication:** Defense to all crimes if meets insanity standard at time of crime.`
          }
        ]
      }
    ]
  },

  conlaw: {
    title: 'Constitutional Law',
    icon: '🏛️',
    description: 'Judicial review, federal power, state power, due process, equal protection, and First Amendment.',
    sections: [
      {
        title: 'I. Judicial Review & Justiciability',
        content: `**Marbury v. Madison:** Established judicial review — courts can invalidate legislation that conflicts with the Constitution.\n\n**Standing (Article III):** (1) Injury-in-fact — concrete, particularized, actual or imminent; (2) Causation — injury fairly traceable to D's action; (3) Redressability — favorable decision likely to redress injury. No third-party standing (exceptions: close relationship; third party unable to assert own rights; associational standing for organizations). No generalized grievances.\n\n**Ripeness:** Case must be fit for judicial resolution — real, immediate, direct harm or reasonable certainty of harm. Hardship if withheld.\n\n**Mootness:** Live controversy must exist throughout proceedings. Exceptions: capable of repetition yet evading review; voluntary cessation; class action (even if named plaintiff's claim moots).\n\n**Political Question:** Court declines to hear questions committed to another branch by text or lack of judicially manageable standards (Baker v. Carr factors).`
      },
      {
        title: 'II. Federal Congressional Power',
        subsections: [
          {
            heading: 'A. Commerce Clause',
            content: `Congress can regulate: (1) channels of interstate commerce; (2) instrumentalities of interstate commerce and persons/things in it; (3) activities that substantially affect interstate commerce.\n\n**Substantial effects test (Lopez, Morrison):** Economic activity: aggregate under Wickard; non-economic activity: must have substantial effect individually (Morrison — Violence Against Women Act; Lopez — Gun-Free School Zones). Requires nexus between activity and interstate commerce.\n\n**NFIB v. Sebelius (ACA):** Commerce Clause cannot compel participation in commerce (mandate invalid under CC); but upheld as tax.`
          },
          {
            heading: 'B. Taxing and Spending Power',
            content: `Congress can tax and spend for the general welfare. Conditions on grants must: (1) be unambiguous; (2) relate to federal interest in the program; (3) not violate other constitutional provisions; (4) not be unduly coercive (NFIB v. Sebelius — Medicaid expansion was unconstitutionally coercive "gun to the head").`
          },
          {
            heading: 'C. Necessary and Proper',
            content: `Congress can use any means reasonably calculated to carry out enumerated powers (McCulloch v. Maryland). Broad deference given. Cannot be used alone — must be linked to an enumerated power.`
          },
          {
            heading: 'D. 14th Amendment Enforcement (§5)',
            content: `Congress can enforce the 14th Amendment by appropriate legislation. Congruence and proportionality (Boerne): must be congruent and proportional to pattern of constitutional violations.`
          }
        ]
      },
      {
        title: 'III. State Power',
        subsections: [
          {
            heading: 'A. Preemption',
            content: `Federal law is supreme (Supremacy Clause). Express preemption: statute explicitly preempts. Implied preemption: (1) Field preemption — federal law so pervasive, no room for states; (2) Conflict preemption — impossible to comply with both; (3) Obstacle preemption — state law obstacle to federal objectives.`
          },
          {
            heading: 'B. Dormant Commerce Clause',
            content: `States cannot unduly burden or discriminate against interstate commerce, even without congressional action.\n\n**Discrimination test:** Laws that facially discriminate against interstate commerce are virtually per se invalid (can only be justified by legitimate local purpose that cannot be achieved by less discriminatory means).\n\n**Pike balancing test:** Non-discriminatory laws incidentally burdening interstate commerce: burden vs. local benefit. Uphold unless burden clearly excessive in relation to local benefits.\n\n**Exceptions:** Market participant exception (state acting as buyer/seller, not regulator); congressional authorization; valid health/safety regulation.`
          }
        ]
      },
      {
        title: 'IV. Due Process',
        subsections: [
          {
            heading: 'A. Procedural Due Process',
            content: `"Deprivation" of "life, liberty, or property" without "due process" — what process is required?\n\n**Mathews v. Eldridge balancing:** (1) Private interest at stake; (2) Risk of erroneous deprivation under existing procedures and value of additional procedures; (3) Government's interest (including fiscal/administrative burden).\n\n**Property:** Legitimate claim of entitlement (not just a need, desire, or abstract entitlement); includes tenured employment, welfare benefits, K-12 education, parole.\n\n**Liberty:** Physical freedom; freedom from stigma (stigma-plus doctrine requires stigma + tangible change in legal status).`
          },
          {
            heading: 'B. Substantive Due Process',
            content: `**Fundamental Rights (Strict Scrutiny):** Right must be deeply rooted in history and tradition and implicit in ordered liberty. Rights include: privacy, marriage, contraception, child-rearing, procreation, interstate travel, voting (some); Obergefell added right to marry for same-sex couples; Dobbs overruled abortion as fundamental right.\n\n**Non-Fundamental Rights (Rational Basis):** Law rationally related to legitimate government interest. Very deferential. Government wins unless law is arbitrary or irrational.\n\n**Levels of Scrutiny:** Strict (fundamental right or suspect class) — compelling interest + narrowly tailored + least restrictive means. Intermediate (quasi-suspect class: gender, legitimacy) — important interest + substantially related. Rational basis — legitimate interest + rationally related.`
          }
        ]
      },
      {
        title: 'V. Equal Protection',
        content: `**Suspect Classifications (Strict Scrutiny):** Race, national origin, alienage (exception: political functions doctrine for state alienage classifications). Requires compelling government interest, narrowly tailored, least restrictive means.\n\n**Quasi-Suspect (Intermediate):** Gender — important government interest substantially related to objective; must be based on real differences (VMI). Legitimacy (similar treatment).\n\n**Non-Suspect (Rational Basis):** Age, disability, wealth, sexual orientation (some courts now apply heightened scrutiny for sexual orientation after Windsor/Obergefell).\n\n**Affirmative Action:** Strict scrutiny applies. Compelling interest: diversity in education (allowed, with limitations). No quotas. Holistic review required. SFFA v. Harvard (2023) — race-conscious admissions programs at Harvard and UNC unconstitutional.`
      },
      {
        title: 'VI. First Amendment',
        content: `**Content-Based Restrictions (Strict Scrutiny):** Government restrictions based on message, idea, subject matter are presumptively unconstitutional. Compelling interest + narrowly tailored.\n\n**Content-Neutral Restrictions (Intermediate):** Restrictions on time, place, or manner of speech. Narrowly tailored to serve significant government interest + leave open ample alternative channels.\n\n**Categorical Exclusions:** Some speech not protected: obscenity (Miller test — prurient interest + patently offensive + no serious value); true threats; incitement to imminent lawless action (Brandenburg); fighting words; fraud; perjury; child pornography.\n\n**Overbreadth/Vagueness:** Laws criminalizing substantially more protected speech than unprotected can be facially challenged. Vague laws lack fair notice or invite arbitrary enforcement.\n\n**Prior Restraint:** Presumptively unconstitutional. Nearly always invalid (Near v. Minnesota). Exceptions: national security in extreme cases; obscenity after hearing; certain injunctions.\n\n**Establishment Clause:** Lemon test largely abandoned; Kennedy v. Bremerton (2022) — look to historical practices and understandings. Government cannot coerce religious participation.\n\n**Free Exercise:** Neutral, generally applicable laws are constitutional (Employment Division v. Smith). If a law specifically targets religion → strict scrutiny (Church of Lukumi). Sherbert/Yoder individualized exemption system → must apply consistently.`
      }
    ]
  },

  property: {
    title: 'Property',
    icon: '🏠',
    description: 'Real property, estates, future interests, landlord-tenant, transactions, and land use.',
    sections: [
      {
        title: 'I. Present Estates',
        content: `**Fee Simple Absolute (FSA):** "To A" or "To A and her heirs." Potentially infinite duration. Freely devisable, descendible, alienable. No future interest in grantor.\n\n**Fee Tail:** "To A and the heirs of his body." Descends to lineal descendants only. Converted to FSA by most states.\n\n**Life Estate:** "To A for life." Duration = measuring life. A = life tenant; entitled to possession and rents/profits. Duty not to commit waste (voluntary = affirmative damage; permissive = failure to maintain; ameliorative = increases value but changes character). Freely alienable but only for duration of measuring life.\n\n**Defeasible Fees:**\n- **Fee Simple Determinable (FSD):** "To A so long as..." or "until...". Automatically ends on stated condition. Future interest: Possibility of reverter in grantor.\n- **Fee Simple Subject to Condition Subsequent (FSSCS):** "To A, but if..." + right of entry clause. Grantor must exercise right of entry to retake. Future interest: Right of Entry (Power of Termination) in grantor.\n- **Fee Simple Subject to Executory Interest (FSSEI):** "To A, but if X happens, to B." Automatically divests to third party on condition. Future interest: Executory interest in third party.`
      },
      {
        title: 'II. Future Interests',
        content: `**In Grantor:** Reversion (follows life estate or lesser estate when transferee's estate ends); Possibility of Reverter (follows FSD); Right of Entry/Power of Termination (follows FSSCS).\n\n**In Transferees (Remainders):** Must be in 3rd party; must take at natural expiration of preceding estate; cannot divest (distinguish executory interests).\n- **Vested Remainder:** Certain to become possessory; no condition precedent; taker identified. Indefeasibly vested (nothing can cut it short); vested subject to open (class gift, partial members identified — RAP applies to unborn members); vested subject to complete divestment (condition subsequent).\n- **Contingent Remainder:** Subject to condition precedent OR taker unascertained at creation. Destructibility rule: contingent remainder destroyed if not vested when preceding estate ends (abolished in most states).\n\n**Executory Interest:** Must cut short or follow a defeasible fee. Shifting (divests another grantee); Springing (divests grantor after estate ends or before estate begins).\n\n**Rule Against Perpetuities (RAP):** No interest is good unless it must vest, if at all, within a life in being + 21 years. Analysis: identify validating life; ask if it's possible (not certain) for interest to vest too remotely. Common law: if any scenario exists where might vest too remote → void.\n\nModern reforms: Wait and see (vest if actually vests within period); USRAP (90-year savings period); Many states abolished RAP for trusts.`
      },
      {
        title: 'III. Concurrent Ownership',
        content: `**Tenancy in Common (TIC):** Two or more, each with separate undivided interest. No survivorship. Freely devisable/alienable. Default form if other forms not clearly created. Partition available (in kind or by sale).\n\n**Joint Tenancy (JT):** Right of survivorship — deceased's share goes to surviving joint tenants automatically. Requires 4 unities at creation: Time, Title, Interest, Possession (TTIP). Destroyed by severance (one JT conveys to third party → TIC as to that share). Mortgage alone does NOT sever in lien theory states (majority). Secret conveyance to self in some states can sever.\n\n**Tenancy by Entirety (TBE):** Between spouses only. Right of survivorship. Cannot be conveyed by one spouse alone. Creditors of one spouse cannot reach TBE property (in most states). Severed by divorce, mutual agreement, or joint conveyance.`
      },
      {
        title: 'IV. Landlord-Tenant Law',
        content: `**Term of Years:** Specific time period. No notice to terminate. Can be for any period — does not need to be a "year."\n\n**Periodic Tenancy:** Continues for successive periods until one party terminates. Notice required = one period's notice (except year-to-year = 6 months). Created expressly or by implication (paying rent with no set end date).\n\n**Tenancy at Will:** No fixed period; terminable by either party at any time. Modern: reasonable notice required.\n\n**Tenancy at Sufferance (Holdover):** Tenant wrongfully holds over after lease expires. Landlord may: treat as trespasser (evict) or bind tenant to new tenancy (election — landlord's choice; periodic tenancy implied).\n\n**Tenant's Duties:** Pay rent; not commit waste; comply with habitability obligations.\n\n**Landlord's Duties:** Deliver possession (majority); covenant of quiet enjoyment (tenant's right to undisturbed use); implied warranty of habitability (residential only — majority rule today; condition must be suitable for human habitation). Breach of IWH: tenant can withhold rent, repair and deduct, seek rent reduction, or terminate.\n\n**Constructive Eviction:** Landlord's wrongful acts make premises substantially unusable → tenant can vacate and terminate. Tenant must actually vacate.`
      },
      {
        title: 'V. Real Property Transactions',
        content: `**Contract of Sale:** Statute of frauds requires written, signed agreement describing property and price. Equitable conversion: once contract signed, buyer has equitable title; seller holds legal title in trust. Risk of loss on buyer in most states after contract (unless seller at fault).\n\n**Deed:** Must be: in writing, signed by grantor, identify grantor/grantee, describe property, words of conveyance. Delivery required (physical transfer + intent to pass title; grantee's acceptance presumed).\n\n**Types of Deeds:** General warranty deed — 6 covenants (seisin, right to convey, against encumbrances; warranty, quiet enjoyment, further assurances). Special warranty deed — covenants limited to grantor's ownership period. Quitclaim — no covenants, conveys whatever interest grantor has.\n\n**Recording Acts:** BFP (bona fide purchaser for value without notice) generally protected.\n- **Notice:** BFP without notice at time of purchase prevails over prior unrecorded conveyance, even if doesn't record. Record later still valid.\n- **Race-Notice:** Must both record first AND have no notice of prior unrecorded conveyance.\n- **Race:** First to record wins regardless of notice. (Very few states.)\n\n**Marketable Title:** Implied in every contract for sale — title free from reasonable doubt. Defects in chain of title, encumbrances, adverse possession claims can make title unmarketable. Seller must have marketable title at time of closing.`
      },
      {
        title: 'VI. Adverse Possession',
        content: `Acquire title by: **COAH** (Continuous; Open and Notorious; Actual; Hostile) + statutory period.\n\n**Continuous:** Consistent use typical of type of property. Seasonal use of seasonal property = continuous. Tacking allowed if privity (deed, gift, will, descent) with prior possessor.\n\n**Open and Notorious:** Such that a reasonable owner would notice. Must be visible, not clandestine.\n\n**Actual:** Physical use of land as owner would use it.\n\n**Hostile/Adverse (under claim of right):** Without owner's permission. Objective test (most states — doesn't matter what D thought); Subjective — good faith or bad faith (minority tests).\n\n**Statutory Period:** Typically 5-21 years. Disabilities statute tolls period if owner disabled (minor, insane, imprisoned) at time adverse possession began.\n\n**Color of Title:** Defective deed; adverse possessor acquires only what deed describes (constructive possession). Not required for adverse possession.`
      },
      {
        title: 'VII. Easements, Covenants, Takings',
        content: `**Easements:** Right to use another's land. Appurtenant (benefits dominant tenement; runs with land) vs. in gross (personal benefit). Affirmative (right to do something) vs. negative (right to prevent something).\n\nCreation: Express (SOF); Implication (prior existing use; necessity); Prescription (like adverse possession — COAH but no actual possession).\n\nTermination: Release; merger (same owner); abandonment; estoppel; prescription; end of necessity.\n\n**Real Covenants:** Promise runs with the land (future owners bound). Requirements: writing + intent + notice + privity (horizontal and vertical) + touch and concern. Horizontal privity = relationship between original promisor/promisee at time of covenant creation.\n\n**Equitable Servitudes:** Enforced in equity. Requirements: writing + intent + notice + touch and concern (no privity required). Common scheme/general plan can bind all lots in subdivision.\n\n**Takings (5th Amendment):** Government cannot take private property for public use without just compensation.\n\n**Physical Taking:** Complete occupation → per se taking.\n\n**Regulatory Taking:** Regulation goes "too far" (Pennsylvania Coal v. Mahon).\n- **Categorical Rule (Lucas):** Regulation deprives property of all economic value → per se taking (unless title already restricted).\n- **Penn Central Balancing:** Three factors: economic impact on claimant; interference with investment-backed expectations; character of government action.\n- **Exactions:** Government conditions on permits must have nexus and rough proportionality to impact of development (Nollan, Dolan).`
      }
    ]
  }
};

// ════════════════════════════════════════════════════════════════
// ATTACK SHEETS — Issue Spotting Frameworks
// ════════════════════════════════════════════════════════════════

const ATTACK_SHEETS = {

  contracts: {
    title: 'Contracts Attack Sheet',
    intro: 'Use this framework to spot every issue on a Contracts exam. Work through each step — even if the answer to a threshold question seems obvious, address it briefly.',
    steps: [
      {
        step: 1,
        issue: 'UCC vs. Common Law?',
        analysis: 'Does the contract involve goods (UCC Art. 2) or services/real property (common law)? If mixed: what\'s the predominant purpose?'
      },
      {
        step: 2,
        issue: 'Was a contract formed?',
        analysis: '(a) Offer — intent, definiteness (all material terms), communicated? Firm offer (UCC — merchant + signed writing = irrevocable up to 3 months)? (b) Acceptance — mirror image (CL) or 2-207 battle of forms (UCC)? Mode of acceptance? Mailbox rule applicable? (c) Consideration — bargained-for exchange? Pre-existing duty? Illusory promise? Past consideration? Promissory estoppel as substitute?'
      },
      {
        step: 3,
        issue: 'Defense to formation?',
        analysis: 'SOF — is this one of the 6 types requiring writing? Mutual mistake? Unilateral mistake (other side knew)? Fraud/misrepresentation? Duress? Undue influence? Incapacity (minor/mental)? Unconscionability (procedural + substantive)?'
      },
      {
        step: 4,
        issue: 'What are the contract terms?',
        analysis: 'Parol Evidence Rule: was there a prior/contemporaneous written or oral agreement that contradicts the final written contract? Fully integrated (bars all extrinsic evidence) vs. partially integrated (bars contradictions, allows supplements). Exceptions: fraud, ambiguity, condition precedent, collateral agreements. UCC gap-fillers: price (reasonable), time (reasonable), delivery (seller\'s place of business or where goods are).'
      },
      {
        step: 5,
        issue: 'Was performance required?',
        analysis: 'Express condition — strictly satisfied? Constructive condition (substantial performance — are you in a service or goods contract)? Condition excused by waiver, estoppel, or prevention?'
      },
      {
        step: 6,
        issue: 'Was there a breach?',
        analysis: 'Material breach or minor breach? (RST §241 factors) If UCC: perfect tender rule — any nonconformity → right to reject (cure available?). Anticipatory repudiation: clear and unequivocal? What options does non-breaching party have? UCC demand for assurance?'
      },
      {
        step: 7,
        issue: 'Was performance excused?',
        analysis: 'Impossibility (objective impossibility), impracticability (UCC/common law), or frustration of purpose? Whose risk was it?'
      },
      {
        step: 8,
        issue: 'What remedies are available?',
        analysis: 'Expectation (benefit of bargain — loss in value + incidentals + consequentials − costs saved). Consequential damages: were they foreseeable at time of contracting (Hadley)? Reliance damages (out-of-pocket costs)? Restitution (unjust enrichment)? Specific performance (unique goods or real property)? Duty to mitigate? UCC buyer/seller remedies checklist. Liquidated damages clause: reasonable estimate at contracting or unenforceable penalty?'
      }
    ]
  },

  torts: {
    title: 'Torts Attack Sheet',
    intro: 'Identify the type of tort claim and work through the applicable framework. Multiple theories may apply to the same fact pattern.',
    steps: [
      {
        step: 1,
        issue: 'What type of tort?',
        analysis: 'Negligence (unintentional); Intentional tort (purpose or knowledge); Strict liability (abnormally dangerous, wild animals); Products liability (strict, negligence, or warranty)? Multiple theories possible — address all.'
      },
      {
        step: 2,
        issue: 'NEGLIGENCE: Duty?',
        analysis: 'General duty to exercise reasonable care to foreseeable plaintiffs (Cardozo) or all plaintiffs (Andrews)? Any special relationship creating heightened or limited duty? Premises liability: invitee/licensee/trespasser (traditional) or reasonable care to all (modern)? Nonfeasance vs. misfeasance? Duty to rescue (normally no; exceptions: special relationship, creation of peril, undertaking)?'
      },
      {
        step: 3,
        issue: 'NEGLIGENCE: Breach?',
        analysis: 'Reasonable person standard (objective). Negligence per se (statute violated, plaintiff in protected class, harm of type prevented)? Professional standard? BPL formula analysis (B < PL)? Custom relevant but not dispositive.'
      },
      {
        step: 4,
        issue: 'NEGLIGENCE: Causation?',
        analysis: 'Actual cause: but-for test; multiple causes: substantial factor test; alternative liability/burden shifting (Summers); market share (Sindell)? Proximate cause: was harm foreseeable? Any unforeseeable harm, unforeseeable plaintiff, or superseding cause (independent, unforeseeable)?'
      },
      {
        step: 5,
        issue: 'NEGLIGENCE: Damages?',
        analysis: 'Compensatory (economic + non-economic). Eggshell plaintiff rule. Collateral source rule. Punitive damages (actual malice or recklessness)? Duty to mitigate?'
      },
      {
        step: 6,
        issue: 'NEGLIGENCE: Defenses?',
        analysis: 'Contributory negligence (complete bar, minority) OR comparative fault (pure or modified — majority)? Assumption of risk (express or implied)? Last clear chance (contributory negligence states only)?'
      },
      {
        step: 7,
        issue: 'INTENTIONAL TORT?',
        analysis: 'Battery (harmful/offensive contact, intentional)? Assault (apprehension of imminent contact)? False imprisonment (confined, no reasonable exit)? IIED (extreme outrageous conduct, severe distress)? Trespass to land? Trespass to chattels? Conversion (serious interference — pay FMV)? Transferred intent applies. Defenses: consent, self-defense, defense of others/property, necessity, authority.'
      },
      {
        step: 8,
        issue: 'STRICT LIABILITY?',
        analysis: 'Abnormally dangerous activity (RST §519-520 factors)? Wild animal / known dangerous domestic animal? Products liability strict liability (§402A — manufacturing defect, design defect, warning defect)? Any comparative fault defense?'
      },
      {
        step: 9,
        issue: 'Special tort issues?',
        analysis: 'Nuisance (private = substantial unreasonable interference with use/enjoyment; public = interference with public right)? Defamation (statement, about P, published, damages; public figure → actual malice; private figure → at least negligence)? Privacy torts (intrusion, appropriation, false light, private disclosure)?'
      }
    ]
  },

  civpro: {
    title: 'Civil Procedure Attack Sheet',
    intro: 'Civil procedure exam questions often involve multiple procedural issues. Work through the threshold jurisdictional questions first.',
    steps: [
      {
        step: 1,
        issue: 'Subject Matter Jurisdiction?',
        analysis: 'Federal question (§1331): claim arise under federal law on face of well-pleaded complaint? Diversity (§1332): complete diversity (check each party\'s citizenship — domicile for individuals, incorporation + PPB for corporations) AND AIC > $75K (aggregation rules)? Supplemental jurisdiction (§1367): same nucleus of operative fact; check §1367(b) in diversity cases; discretionary decline?'
      },
      {
        step: 2,
        issue: 'Personal Jurisdiction?',
        analysis: 'Traditional basis (presence, domicile, consent)? Long-arm statute in state? Due process: minimum contacts + fair play/substantial justice (Int\'l Shoe)? General jurisdiction (essentially at home — PPB or state of incorporation for corporations)? Specific jurisdiction (claim arises from contacts + purposeful availment)? Burnham (tag jurisdiction still valid)?'
      },
      {
        step: 3,
        issue: 'Venue?',
        analysis: '§1391: all defendants reside in same state; or substantial part of events occurred; or fallback. Transfer (§1404 convenience; §1406 wrong venue — which court\'s law applies after transfer)? Forum non conveniens?'
      },
      {
        step: 4,
        issue: 'Erie?',
        analysis: 'Is there a valid Federal Rule of Civil Procedure on point (Hanna)? If yes → apply FRCP. If no, state vs. federal judge-made law: outcome-determinative (Guaranty Trust)? Countervailing federal interests (Byrd)? Would applying federal law encourage forum shopping or inequitable administration (Erie twin aims)?'
      },
      {
        step: 5,
        issue: 'Pleadings?',
        analysis: 'Complaint: Rule 8(a) — short and plain statement; Twombly/Iqbal plausibility standard (not just possible; accept well-pleaded facts; disregard conclusory statements)? Rule 12 motions: which are waivable and when? Answer: admit/deny/lack knowledge; affirmative defenses properly raised?  Rule 11 certification?'
      },
      {
        step: 6,
        issue: 'Joinder of Parties/Claims?',
        analysis: 'Rule 13: compulsory counterclaim (same transaction/occurrence; waived if not raised) vs. permissive counterclaim; cross-claims. Rule 14: third-party impleader (derivative liability). Rule 19: necessary parties (complete relief; prejudice); indispensable (dismiss if cannot join)? Rule 20: permissive joinder. Class actions (Rule 23): four prerequisites + one type?'
      },
      {
        step: 7,
        issue: 'Discovery?',
        analysis: 'Mandatory disclosures (26(a))? Scope: relevant to claim/defense AND proportional? Privilege: attorney-client; work product (absolute for mental impressions; qualified for other work product — substantial need + undue hardship)? Appropriate discovery tool (deposition, interrogatories, document requests, inspection, mental/physical exam, RFA)? Sanctions (Rule 37)?'
      },
      {
        step: 8,
        issue: 'Summary Judgment?',
        analysis: 'Rule 56: no genuine dispute of material fact + entitled to judgment as matter of law. Moving party shifts burden once prima facie shown. Non-movant must show specific facts demonstrating genuine issue. Viewing facts in light most favorable to non-movant.'
      },
      {
        step: 9,
        issue: 'Trial and Post-Trial?',
        analysis: 'JMOL (Rule 50): before verdict, reasonable jury could not find for non-movant? RJMOL (Rule 50(b)): after verdict? New trial (Rule 59): legal error, against weight of evidence, excessive/inadequate damages? Appellate review: final judgment rule; interlocutory exceptions?'
      },
      {
        step: 10,
        issue: 'Preclusion?',
        analysis: 'Claim preclusion (res judicata): same claim (same transaction — modern); final judgment on merits; same parties or privity? Issue preclusion (collateral estoppel): same issue; actually litigated and decided; necessary to judgment; same parties or non-mutual offensive collateral estoppel?'
      }
    ]
  },

  crimlaw: {
    title: 'Criminal Law Attack Sheet',
    intro: 'Identify each crime and work through the elements. Always compare MPC vs. common law if the question doesn\'t specify. Multiple crimes and defenses often apply to the same facts.',
    steps: [
      {
        step: 1,
        issue: 'MPC or Common Law?',
        analysis: 'Identify which jurisdiction applies. If unclear, analyze under both. Key differences: mens rea structure (4 MPC states vs. CL specific/general/malice/strict); attempt (substantial step vs. proximity); felony murder (MPC limits); insanity (ALI test vs. M\'Naghten); duress (available for homicide under MPC).'
      },
      {
        step: 2,
        issue: 'Actus Reus?',
        analysis: 'Was there a voluntary act? Reflex, convulsion, sleepwalking, hypnosis, compulsion = involuntary (potential defense). Is it a crime of omission? Legal duty to act? (statute, special relationship, contract, assumption, creation of peril) Status crime (unconstitutional to criminalize mere status).'
      },
      {
        step: 3,
        issue: 'Mens Rea?',
        analysis: 'What mental state does the crime require? CL: specific intent (need intent to achieve result), general intent (just awareness), malice, strict liability. MPC: purpose, knowledge (willful blindness = knowledge), recklessness (default), negligence. Mistake of fact: negates specific intent if honest; negates general intent if reasonable. Mistake of law: generally not a defense.'
      },
      {
        step: 4,
        issue: 'Is this a homicide?',
        analysis: 'CL: Murder = malice aforethought (intent to kill, intent to GBH, depraved heart, felony murder). 1st degree = premeditated/deliberate. 2nd degree = all other murder. Voluntary manslaughter = heat of passion (adequate provocation, no cooling time). Involuntary = criminal negligence or misdemeanor-manslaughter. MPC: Murder = purpose/knowledge or extreme recklessness (EID). Manslaughter = reckless or EMED defense (broader than CL heat of passion).'
      },
      {
        step: 5,
        issue: 'Property/Other Crimes?',
        analysis: 'Larceny (trespassory taking + carrying away + personal property + intent to permanently deprive)? Embezzlement (lawful possession + fraudulent conversion)? False pretenses (title obtained by false present/past fact)? Robbery (larceny from person + force/threat)? Burglary (breaking + entering + dwelling + nighttime + intent to commit felony — CL; modern = any structure)? Arson? Battery? Assault?'
      },
      {
        step: 6,
        issue: 'Inchoate Crime?',
        analysis: 'Attempt: intent to commit + act beyond preparation. CL proximity test vs. MPC substantial step test. Abandonment? Impossibility (legal = defense; factual = no defense). Conspiracy: agreement + overt act (usually). Pinkerton liability for co-conspirators? Withdrawal? Wharton\'s rule? Solicitation: request + intent (complete on communication; merger on agreement/completion)?'
      },
      {
        step: 7,
        issue: 'Accomplice Liability?',
        analysis: 'At common law: principal in 1st degree (perpetrator); principal in 2nd degree (present, aiding); accessory before the fact; accessory after the fact (separate crime). Modern: accomplice (aids + abets + counsels + command with intent to facilitate) liable as principal. Vicarious liability (respondeat superior in limited criminal contexts)?'
      },
      {
        step: 8,
        issue: 'Defenses?',
        analysis: 'Self-defense: reasonable belief + imminence + proportionality; duty to retreat (minority) vs. stand your ground (majority)? Defense of others? Defense of property (no deadly force)? Insanity: M\'Naghten (didn\'t know nature OR didn\'t know wrong); irresistible impulse; MPC ALI test (substantial capacity to appreciate/conform). Diminished capacity (negates specific intent, majority)? Duress (imminent threat, no homicide in most states)? Necessity (lesser evil, no homicide)? Intoxication (voluntary = specific intent only; involuntary = all crimes)?'
      }
    ]
  },

  conlaw: {
    title: 'Constitutional Law Attack Sheet',
    intro: 'Con Law exams test both federal power (what can Congress/President do?) and individual rights (what can the government NOT do?). Identify the type of question first.',
    steps: [
      {
        step: 1,
        issue: 'Threshold: Justiciability?',
        analysis: 'Standing: injury-in-fact (concrete, particularized, actual/imminent) + causation (traceable to defendant) + redressability (favorable ruling likely to redress)? Third-party standing (close relationship, or 3rd party unable to assert own rights)? No generalized grievances. Mootness (exceptions: capable of repetition evading review; voluntary cessation; class action)? Ripeness (fit for judicial decision + hardship if withheld)? Political question (committed to another branch or lack of judicially manageable standards)?'
      },
      {
        step: 2,
        issue: 'Federal Government Action: Source of Power?',
        analysis: 'Commerce Clause: channels, instrumentalities, or substantial effect (economic activity aggregate under Wickard; non-economic must have substantial effect individually — Lopez, Morrison)? Taxing/spending power (condition: unambiguous, related to federal program interest, not coercive)? N&P Clause (linked to another enumerated power — McCulloch)? §5 14th Amendment enforcement power (congruent and proportional)?'
      },
      {
        step: 3,
        issue: 'State Government Action: Preemption?',
        analysis: 'Express preemption (statute says so)? Implied field preemption (federal scheme so pervasive no room for states)? Implied conflict preemption (physically impossible to comply with both)? Obstacle preemption (state law obstacle to federal objectives)?'
      },
      {
        step: 4,
        issue: 'State Action: Dormant Commerce Clause?',
        analysis: 'Does state law discriminate against interstate commerce (virtually per se invalid; compelling local interest + no less discriminatory alternative to survive)? Does it burden interstate commerce without discrimination (Pike balancing: burden vs. local benefit)? Exception: market participant; congressional consent?'
      },
      {
        step: 5,
        issue: 'Individual Rights: What right is being burdened?',
        analysis: 'Identify the right. Then: Is it a fundamental right (strict scrutiny) — compelling interest + narrowly tailored + least restrictive means? Or non-fundamental (rational basis) — legitimate interest + rationally related? Or quasi-suspect classification (intermediate) — important interest + substantially related?'
      },
      {
        step: 6,
        issue: 'Due Process?',
        analysis: 'Procedural: is there a deprivation of life, liberty, or property? What process is due (Mathews balancing: private interest + risk of error + government interest)? Substantive: is a fundamental right at stake (strict scrutiny) vs. non-fundamental (rational basis)? Key fundamental rights: privacy, marriage, contraception, child-rearing, interstate travel. Recent: Dobbs overruled abortion; Obergefell (marriage equality).'
      },
      {
        step: 7,
        issue: 'Equal Protection?',
        analysis: 'What classification? Race/national origin/alienage = suspect → strict scrutiny. Gender/legitimacy = quasi-suspect → intermediate. Age/disability/wealth/all others = rational basis. Affirmative action: strict scrutiny; SFFA v. Harvard (2023) — race-conscious admissions programs unconstitutional. Disparate impact alone does not prove equal protection violation (need discriminatory intent — Arlington Heights factors).'
      },
      {
        step: 8,
        issue: 'First Amendment?',
        analysis: 'Government action? Content-based restriction (strict scrutiny) vs. content-neutral time/place/manner (intermediate: important interest, narrowly tailored, ample alternative channels)? Categorical exclusions (obscenity, true threats, incitement [Brandenburg: imminent + likely lawless action], fighting words, fraud, child porn)? Prior restraint (presumptively unconstitutional)? Vagueness/overbreadth? Establishment Clause (historical practices — Kennedy 2022)? Free Exercise (neutral, generally applicable law OK — Smith; targeting religion → strict scrutiny — Lukumi)?'
      }
    ]
  },

  property: {
    title: 'Property Attack Sheet',
    intro: 'Property questions typically involve multiple issues across estates, future interests, concurrent ownership, landlord-tenant, or land transactions. Work through each applicable area.',
    steps: [
      {
        step: 1,
        issue: 'Present Estate: What estate was created?',
        analysis: 'Look for durational/conditional language. "To A" = FSA. "To A for life" = life estate. "To A so long as / while / until" = FSD (automatically ends). "To A, but if X, grantor may re-enter" = FSSCS (entry required). "To A, but if X, to B" = FSSEI (automatically divests to B). Ambiguous language: courts prefer FSA if possible. Note: any estate less than FSA creates retained interest in grantor or executory interest in 3rd party.'
      },
      {
        step: 2,
        issue: 'Future Interest: Who holds what?',
        analysis: 'In grantor: Reversion (follows lesser estate), Possibility of Reverter (follows FSD), Right of Entry (follows FSSCS). In transferee: Remainder (must be in 3rd party; takes at natural expiration; no divesting). Vested remainder (ascertained taker + no condition precedent): indefeasibly vested; vested subject to open; vested subject to divestment. Contingent remainder (unascertained taker OR condition precedent). Executory interest (cuts short preceding estate or follows FSD — shifting vs. springing). Check RAP for contingent remainders and executory interests.'
      },
      {
        step: 3,
        issue: 'RAP Applies?',
        analysis: 'Apply to: contingent remainders; executory interests; vested remainders subject to open; options and rights of first refusal. Rule: interest is void if it might vest outside the perpetuities period (life in being + 21 years). Identify validating lives. Ask: is there any scenario (no matter how remote) where it vests too late? If yes → void under CL. Modern alternatives: wait-and-see; USRAP 90-year period; many states abolished for trusts.'
      },
      {
        step: 4,
        issue: 'Concurrent Ownership Issue?',
        analysis: 'TIC (default; no survivorship; separate interests freely alienable; partition available)? JT (right of survivorship; 4 unities TTIP; severed by one JT conveying to third party or mortgaging in title states)? TBE (married couples only; survivorship; neither alone can convey; creditors of one cannot reach)? Partition: in kind preferred (physical division); by sale (partition in kind impractical or prejudicial).'
      },
      {
        step: 5,
        issue: 'Landlord-Tenant Issue?',
        analysis: 'Type of tenancy (term, periodic, at will, at sufferance/holdover)? Landlord duties: deliver possession (majority rule), quiet enjoyment (constructive eviction?), IWH (residential leases — condition suitable for human habitation; tenant\'s remedies: withhold rent, repair/deduct, rent reduction, terminate)? Tenant duties: pay rent, no waste. Sublease (original tenant remains liable to LL) vs. assignment (original tenant not liable unless novation, but most courts still hold original liable on privity of contract). Rent control/regulations applicable?'
      },
      {
        step: 6,
        issue: 'Land Transactions / Deeds / Recording?',
        analysis: 'Contract of sale: SOF, equitable conversion (risk of loss after contract = buyer\'s). Marketable title required (free from reasonable doubt; remedy = rescind before closing). Deed: delivery + acceptance required (intent to pass title). Type of deed (general warranty 6 covenants, special warranty, quitclaim)? Recording Act: identify type (notice, race-notice, race). Is purchaser a BFP (paid value, no notice)? Types of notice: actual, record (constructive from recording), inquiry (visible possession by 3rd party). Chain of title problems: wild deed; after-acquired title; deed recorded out of sequence?'
      },
      {
        step: 7,
        issue: 'Adverse Possession?',
        analysis: 'Elements: COAH + statutory period. Continuous (consistent with type of land; tacking with privity). Open and Notorious (visible, not hidden). Actual (physical use typical of owner). Hostile (without permission; objective test majority; subjective minority). Statutory period (varies by state). Disability toll? Color of title (defective deed; constructive possession of described land)?'
      },
      {
        step: 8,
        issue: 'Easements/Covenants/Servitudes?',
        analysis: 'Easement: type (express — SOF; implied — prior use; necessity; prescriptive — like AP without actual possession). Appurtenant vs. in gross. Does it run with land (must touch and concern, appurtenant)? Termination methods. Real covenant: writing + intent + notice + horizontal and vertical privity + T&C. Equitable servitude: writing + intent + notice + T&C (no privity). Common scheme (estoppel theory)? Takings: physical taking (per se); regulatory taking: Lucas (wipes all value = per se); Penn Central balancing (economic impact, investment expectations, character of gov action); exactions (Nollan/Dolan — nexus + rough proportionality).'
      }
    ]
  }
};
