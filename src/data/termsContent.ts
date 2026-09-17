export interface TermsSection {
  id: string;
  number: number;
  title: string;
  paragraphs: string[];
  isDisclaimer: boolean;
}

export interface TermsData {
  title: string;
  lastUpdated: string;
  effectiveDate: string;
  intro: string[];
  sections: TermsSection[];
}

export const TERMS_DATA: TermsData = {
  "title": "Terms & Conditions",
  "lastUpdated": "March 2026",
  "effectiveDate": "March 2026",
  "intro": [
    "These Terms & Conditions (\"Terms\") govern your access to and use of DopaMint, including our website, applications, interfaces, artificial intelligence systems, agents, agent infrastructure, APIs, software, tools, integrations, and related products and services (collectively, the \"Services\").",
    "For purposes of these Terms, \"DopaMint,\" \"we,\" \"us,\" and \"our\" refer to the provider and operator of the Services.",
    "By accessing or using the Services, creating an account, connecting a wallet, submitting an instruction or intent, authorizing an agent, initiating a transaction, or otherwise using any part of the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, do not access or use the Services."
  ],
  "sections": [
    {
      "id": "section-1",
      "number": 1,
      "title": "About DopaMint",
      "paragraphs": [
        "DopaMint provides AI-powered software and agent infrastructure designed to interpret user intent and coordinate artificial intelligence agents, tools, protocols, applications, blockchain networks, APIs, and third-party services.",
        "Depending on the functionality available to you, the Services may assist with or perform activities involving research, planning, communications, digital assets, trading, payments, transfers, decentralized finance (\"DeFi\"), travel, commerce, scheduling, productivity, and other online, on-chain, or real-world activities.",
        "The Services may use artificial intelligence models, agent orchestration systems, blockchain networks, smart contracts, wallets, payment protocols, APIs, trusted execution environments, and third-party applications and services. Certain features may be experimental, under development, available only to selected users, or unavailable in certain jurisdictions. Descriptions of current or planned functionality do not guarantee that any feature, agent, integration, protocol, asset, or service will be launched, remain available, or operate in a particular manner."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-2",
      "number": 2,
      "title": "Eligibility",
      "paragraphs": [
        "You must be at least 18 years old, or the age of legal majority in your jurisdiction if higher, to use the Services. By using DopaMint, you represent that you have legal capacity to agree to these Terms, that your use is lawful where you are located, that you are not prohibited from using the Services under applicable law, and that information you provide is accurate and not intentionally misleading.",
        "If you use DopaMint on behalf of an organization, you represent that you have authority to act on its behalf. Certain Services may not be available in every country or jurisdiction."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-3",
      "number": 3,
      "title": "Accounts, Authentication and Security",
      "paragraphs": [
        "Certain features may require you to create an account, authenticate through a third-party provider, connect a blockchain wallet, or use another authentication or authorization mechanism. You are responsible for maintaining the security of your account, devices, passwords, wallets, private keys, seed phrases, passkeys, signing devices, and other credentials under your control, and for activity validly authorized through them.",
        "Never disclose your private key or seed phrase to anyone claiming to represent DopaMint. If you believe your account, wallet, or credentials have been compromised, take appropriate security measures immediately. To the extent permitted by law, DopaMint is not responsible for losses caused by phishing, compromised devices, stolen credentials, malware, malicious extensions, compromised wallets, user error, or unauthorized access outside DopaMint's reasonable control."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-4",
      "number": 4,
      "title": "AI and Agent-Based Services",
      "paragraphs": [
        "DopaMint uses artificial intelligence, automated systems, and software agents. These technologies are probabilistic and may produce unexpected or incorrect results.",
        "Information generated, retrieved, summarized, calculated, analyzed, or otherwise presented through the Services (\"Output\") may be inaccurate, incomplete, outdated, misleading, or incorrect. AI systems may misunderstand instructions, incorrectly identify assets or entities, rely on inaccurate data, omit relevant information, or generate fabricated information. You should independently verify important Output before relying on it. DopaMint does not guarantee that Output will be accurate, complete, current, reliable, or suitable for your circumstances."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-5",
      "number": 5,
      "title": "Agents That Take Actions",
      "paragraphs": [
        "Certain DopaMint agents may be capable of taking actions rather than only providing information. Depending on the features and permissions you enable, agents may interact with blockchain networks, smart contracts, wallets, exchanges, decentralized exchanges, DeFi protocols, payment systems, APIs, applications, merchants, booking or travel services, and other third-party services.",
        "When you instruct or authorize an agent to perform an action, you authorize the Services and relevant systems to process your instruction and attempt to perform that action within the permissions, limitations, and guardrails you approved. An agent may be unable to complete an action or may complete it differently from what you expected because of technical, market, network, third-party, or other conditions."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-6",
      "number": 6,
      "title": "Understanding Your Intent",
      "paragraphs": [
        "DopaMint may translate natural-language requests into structured instructions and executable actions. Natural language can be ambiguous, and an agent may interpret an instruction differently from what you intended.",
        "You are responsible for providing clear instructions and, where review is available, checking relevant details such as the asset, amount, recipient, wallet, blockchain network, protocol, transaction type, price, slippage, fees, permissions, and other material parameters before authorizing an action. DopaMint does not guarantee that an agent will interpret every instruction exactly as you intended."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-7",
      "number": 7,
      "title": "Autonomous Agent Actions",
      "paragraphs": [
        "Certain features may allow agents to act automatically within parameters previously authorized by you. These parameters may include spending or transaction limits, approved assets or protocols, approved recipients, time periods, trigger conditions, price parameters, risk limits, or other restrictions.",
        "If you enable autonomous execution, actions falling within the authority you granted may occur without separate approval for every individual action. You are responsible for understanding, reviewing, modifying, revoking, or disabling those permissions. You should not authorize an agent to control, spend, transfer, or transact with more value than you are prepared to risk."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-8",
      "number": 8,
      "title": "Agent Guardrails",
      "paragraphs": [
        "DopaMint may implement safeguards such as permission controls, spending limits, transaction policies, confirmation requirements, execution restrictions, or risk parameters. These safeguards are intended to reduce risk but cannot eliminate it.",
        "Guardrails may fail, operate unexpectedly, rely on inaccurate information, or be unable to prevent losses caused by market conditions, software errors, smart-contract vulnerabilities, malicious third parties, network failures, or user error. You remain responsible for managing the permissions you grant."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-9",
      "number": 9,
      "title": "Continuous Agent Operation",
      "paragraphs": [
        "Certain agents may monitor markets, wallets, blockchain activity, information, events, or other conditions over time and may respond to events or execute permitted actions when defined conditions are satisfied.",
        "Monitoring and execution are not guaranteed. An agent may fail to detect an event, detect an event incorrectly, receive delayed or inaccurate information, fail to execute, execute after conditions have changed, or become unavailable because of network or third-party failures. DopaMint does not guarantee that an agent will identify or successfully act on any particular event, market movement, risk, or opportunity."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-10",
      "number": 10,
      "title": "No Financial, Investment or Professional Advice",
      "paragraphs": [
        "DopaMint is a technology platform. Unless expressly stated otherwise for a particular regulated service, DopaMint is not acting as your broker, investment adviser, financial adviser, portfolio manager, fiduciary, dealer, exchange, lawyer, accountant, tax adviser, or other professional adviser.",
        "Information provided through the Services, including research, alerts, signals, predictions, market data, analysis, Output, wallet activity, and agent-generated information, is provided for informational and technological purposes and should not be treated as individualized investment, financial, legal, accounting, or tax advice.",
        "References to particular assets, trades, strategies, yields, listings, opportunities, or protocols do not constitute an offer, solicitation, recommendation, endorsement, or guarantee by DopaMint. You are responsible for evaluating whether any transaction or activity is appropriate for you and for obtaining professional advice where appropriate."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-11",
      "number": 11,
      "title": "Digital Assets and Blockchain Transactions",
      "paragraphs": [
        "Certain Services may enable interaction with digital assets, blockchain networks, smart contracts, decentralized applications, bridges, or other blockchain infrastructure. These technologies involve significant risks, including price volatility, partial or complete loss of assets, smart-contract vulnerabilities, protocol exploits, malicious or counterfeit tokens, liquidity risk, slippage, oracle failures, congestion, validator or sequencer failures, forks or reorganizations, bridge failures, wallet compromise, stablecoin depegging, transaction delays or failures, MEV and transaction ordering, regulatory changes, and incorrect transaction parameters.",
        "Blockchain transactions may be irreversible once submitted or confirmed. DopaMint cannot guarantee that a transaction can be cancelled, modified, recovered, refunded, or reversed. You accept the risks associated with blockchain and digital asset transactions."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-12",
      "number": 12,
      "title": "Trading and Market Risk",
      "paragraphs": [
        "Certain agents may provide market information or facilitate access to trading functionality provided by third parties. Digital asset markets can be highly volatile, and you may lose some or all of the assets involved in a transaction.",
        "Past performance does not guarantee future results. Historical information, simulations, backtests, market signals, predictions, wallet or whale activity, market sentiment, and AI-generated analysis do not guarantee future performance. Trades submitted or authorized through DopaMint are initiated pursuant to your instructions or permissions. DopaMint does not guarantee profit, performance, execution price, liquidity, or successful execution."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-13",
      "number": 13,
      "title": "Perpetuals, Leverage and Derivatives",
      "paragraphs": [
        "Third-party services accessible through DopaMint may offer perpetual contracts, leveraged trading, derivatives, options, margin products, or similar products. These activities involve heightened risk and may result in rapid losses or liquidation.",
        "Market volatility, oracle prices, funding rates, liquidity, execution delays, blockchain conditions, and protocol rules may affect your position. Liquidation alerts, risk calculations, collateral estimates, or similar information provided through DopaMint may be inaccurate or delayed. You remain responsible for monitoring and managing your positions."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-14",
      "number": 14,
      "title": "DeFi",
      "paragraphs": [
        "DopaMint may enable interaction with third-party DeFi protocols involving swaps, lending, borrowing, staking, bridging, liquidity provision, yield strategies, derivatives, or other decentralized financial activities. These activities may expose you to smart-contract risk, liquidation risk, impermanent loss, liquidity risk, bridge risk, oracle risk, governance risk, economic exploits, and other technical or financial risks.",
        "Unless expressly stated otherwise, third-party DeFi protocols operate independently of DopaMint. Availability through DopaMint does not constitute an endorsement or guarantee of a protocol."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-15",
      "number": 15,
      "title": "Tokenized Assets and Real-World Assets",
      "paragraphs": [
        "Certain Services may display information about or facilitate interaction with tokenized representations of stocks, securities, commodities, currencies, real-world assets, or other financial instruments provided by third parties.",
        "A tokenized asset may not provide the same legal or economic rights as direct ownership of the referenced underlying asset. Differences may include ownership, voting, dividends, redemption, custody, insurance, regulatory protections, and bankruptcy protections. The legal status and availability of tokenized assets may vary by jurisdiction. You are responsible for reviewing the applicable issuer or provider terms. A reference to a tokenized asset does not mean DopaMint issues, owns, custodies, guarantees, or endorses the underlying asset."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-16",
      "number": 16,
      "title": "Wallets and Custody",
      "paragraphs": [
        "DopaMint may integrate with self-custodial wallets, embedded wallets, smart wallets, account-abstraction systems, or third-party wallet infrastructure. The custody arrangement may vary by Service or integration.",
        "Unless expressly stated otherwise for a specific feature, DopaMint does not take custody of your digital assets merely because you access or interact with them through the DopaMint interface. Third-party wallet, signing, key-management, or custody providers may impose their own terms. You are responsible for understanding the applicable custody arrangement."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-17",
      "number": 17,
      "title": "Smart Contracts",
      "paragraphs": [
        "The Services may interact with smart contracts deployed on public blockchain networks. Smart contracts may contain errors, vulnerabilities, malicious code, or unexpected behavior and may be modified, upgraded, paused, governed, exploited, or discontinued by third parties.",
        "DopaMint does not guarantee the security, operation, or continued availability of third-party smart contracts. Interaction with smart contracts may result in permanent loss of digital assets."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-18",
      "number": 18,
      "title": "Third-Party Services",
      "paragraphs": [
        "DopaMint may connect to or interact with third-party products and services, including wallets, blockchain networks, exchanges, decentralized exchanges, DeFi protocols, bridges, payment providers, AI models, APIs, data providers, merchants, booking providers, communication platforms, and other applications.",
        "Third-party services operate independently of DopaMint. Your use of them may be governed by their own terms, privacy policies, fees, and eligibility requirements. You authorize DopaMint to transmit instructions, data, and other information to third-party services as reasonably necessary to provide functionality you request, subject to our Privacy Policy.",
        "DopaMint does not control or guarantee the availability, security, legality, accuracy, performance, or reliability of third-party services. To the extent permitted by applicable law, DopaMint is not responsible for losses caused by the actions, omissions, outages, exploits, insolvency, errors, restrictions, or failures of third parties. Integration, display, or availability of a third-party product does not by itself imply sponsorship, endorsement, affiliation, or partnership."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-19",
      "number": 19,
      "title": "Agent-to-Agent Interactions",
      "paragraphs": [
        "DopaMint may allow agents to discover, communicate with, delegate tasks to, transact with, or otherwise interact with other agents or external services. Third-party agents may operate independently of DopaMint.",
        "DopaMint does not guarantee the identity, reliability, security, reputation, accuracy, or behavior of third-party agents. Identity, reputation, verification, or validation mechanisms may reduce certain risks but cannot eliminate them."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-20",
      "number": 20,
      "title": "x402 and Programmatic Payments",
      "paragraphs": [
        "Certain agents may use x402 or similar payment technologies to pay for APIs, data, compute, tools, content, digital services, or other resources necessary to perform an authorized task. Where you authorize this functionality, an agent may incur costs within the limits and permissions you establish.",
        "Programmatic payments may occur automatically and may be irreversible. You are responsible for charges properly incurred pursuant to the permissions you granted."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-21",
      "number": 21,
      "title": "Fees and Transaction Costs",
      "paragraphs": [
        "Use of the Services may involve DopaMint fees, blockchain gas fees, network fees, exchange fees, protocol fees, bridge fees, spreads, slippage, payment-processing charges, or other third-party fees.",
        "Where reasonably practicable, applicable costs may be displayed before authorization or execution. Certain costs depend on blockchain, network, market, or third-party conditions and may change between estimation and execution. DopaMint does not control fees independently charged by third parties or blockchain networks."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-22",
      "number": 22,
      "title": "$DOPE and Other Digital Assets",
      "paragraphs": [
        "Certain DopaMint functionality, communications, or interfaces may reference, support, or integrate the digital asset known as $DOPE. Nothing in the Services or these Terms constitutes an offer to sell, solicitation to purchase, investment recommendation, promise of profit, guarantee of value, or representation regarding the future price or performance of $DOPE or any other digital asset.",
        "The availability, utility, functionality, transferability, legal classification, and regulatory treatment of $DOPE may change and may vary by jurisdiction. Token-related functionality may be unavailable or restricted for certain users or jurisdictions. You are responsible for determining whether acquiring, holding, transferring, selling, or using any digital asset is lawful and appropriate for you."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-23",
      "number": 23,
      "title": "Market and Blockchain Data",
      "paragraphs": [
        "DopaMint may display token or asset prices, exchange information, wallet activity, blockchain activity, market information, news, analytics, transaction information, or other data obtained from third parties. Such information may be inaccurate, delayed, incomplete, or unavailable.",
        "DopaMint does not guarantee the accuracy, completeness, or timeliness of market or blockchain data. You should independently verify information before making time-sensitive or financially consequential decisions."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-24",
      "number": 24,
      "title": "Compliance and Restricted Use",
      "paragraphs": [
        "You may not use DopaMint in violation of applicable laws, regulations, sanctions, export controls, anti-money-laundering requirements, counter-terrorist-financing requirements, securities laws, commodities laws, financial-services laws, consumer-protection laws, or other legal requirements.",
        "DopaMint may implement measures such as geographic restrictions, wallet or transaction screening, sanctions screening, identity verification, Know Your Customer (\"KYC\"), Know Your Transaction (\"KYT\"), fraud monitoring, or similar controls where appropriate or required. We may block, delay, reject, restrict, or suspend access or transactions where reasonably necessary for legal, security, compliance, fraud-prevention, or risk-management purposes. You may not attempt to circumvent these controls."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-25",
      "number": 25,
      "title": "Taxes",
      "paragraphs": [
        "Transactions performed through or in connection with DopaMint may create tax obligations. You are responsible for determining, reporting, and paying taxes, duties, or governmental charges applicable to your activities. DopaMint does not provide tax advice. Any tax-related information generated through an agent is informational only and should be independently verified."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-26",
      "number": 26,
      "title": "User Content",
      "paragraphs": [
        "You may provide prompts, instructions, messages, documents, images, audio, voice recordings, files, data, preferences, or other information (\"User Content\") to the Services. You retain the rights you hold in your User Content.",
        "You grant DopaMint a non-exclusive, worldwide, royalty-free license to host, process, reproduce, transmit, display, and otherwise use User Content as reasonably necessary to provide, maintain, secure, and operate the Services, subject to our Privacy Policy. You represent that you have the rights and permissions necessary to provide your User Content and permit its processing. You must not submit User Content that unlawfully infringes another person's intellectual property, privacy, confidentiality, publicity, or other rights."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-27",
      "number": 27,
      "title": "AI Output and Intellectual Property",
      "paragraphs": [
        "Subject to applicable law and third-party rights, you may use Output generated for you through the Services. Because AI systems may generate similar or identical responses for different users, Output may not be unique.",
        "DopaMint does not guarantee that Output is unique, eligible for intellectual-property protection, or free from resemblance to existing material or third-party rights. You are responsible for evaluating your use of Output."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-28",
      "number": 28,
      "title": "Memory and Personalization",
      "paragraphs": [
        "Certain features may maintain persistent context, preferences, identity information, previous interactions, transaction context, or other memory to personalize future interactions and actions. Memory systems may be incomplete, inaccurate, or outdated and may make incorrect associations.",
        "You should not assume that an agent remembers every previous instruction or that stored context is complete or current. Where available, you are responsible for reviewing and managing important persistent instructions, preferences, permissions, and authorizations. Personal information processed in connection with memory functionality is governed by our Privacy Policy."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-29",
      "number": 29,
      "title": "Voice and Communications",
      "paragraphs": [
        "Certain Services may allow you to interact with agents through voice or other communication methods. Voice inputs may be processed by DopaMint or third-party technology providers to provide the requested functionality.",
        "You are responsible for obtaining any permission required by law before recording, transmitting, or submitting another person's voice or communications. Processing of voice and other personal information is addressed in our Privacy Policy."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-30",
      "number": 30,
      "title": "Prohibited Uses",
      "paragraphs": [
        "You may not use or attempt to use the Services to violate applicable law; evade sanctions, geographic restrictions, or compliance controls; commit or facilitate fraud, theft, money laundering, terrorist financing, or other financial crime; engage in unlawful market manipulation; unlawfully trade regulated financial products; gain unauthorized access to another person's account, wallet, assets, systems, or information; obtain or steal private keys, passwords, or seed phrases; impersonate another person; distribute malware or malicious code; attack, interfere with, or disrupt the Services or related infrastructure; exploit vulnerabilities; bypass security, permission, rate-limit, compliance, or access controls; unlawfully scrape or systematically extract data; infringe intellectual property, privacy, confidentiality, or other rights; unlawfully harass, threaten, exploit, stalk, or surveil another person; facilitate illegal goods, services, or transactions; exploit or abuse minors; provide materially false information for compliance, security, identity, or transaction purposes; or assist another person in carrying out prohibited activities.",
        "DopaMint may investigate suspected violations and may restrict or terminate access where appropriate."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-31",
      "number": 31,
      "title": "Intellectual Property",
      "paragraphs": [
        "DopaMint and its licensors retain all rights, title, and interest in the Services and associated intellectual property, including software, interfaces, designs, graphics, branding, logos, trademarks, systems, architecture, text, and other materials.",
        "Subject to these Terms, DopaMint grants you a limited, revocable, non-exclusive, non-transferable, and non-sublicensable right to access and use the Services for their intended purposes. Except where expressly permitted or required by law, you may not copy, modify, distribute, sell, sublicense, reverse engineer, decompile, commercially exploit, or create unauthorized derivative works from DopaMint's proprietary software or materials. No ownership rights are transferred to you."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-32",
      "number": 32,
      "title": "Feedback",
      "paragraphs": [
        "If you voluntarily provide ideas, recommendations, suggestions, comments, or other feedback concerning DopaMint or the Services (\"Feedback\"), you grant DopaMint a worldwide, perpetual, irrevocable, royalty-free right to use, reproduce, modify, distribute, and otherwise use that Feedback for any lawful purpose without compensation or obligation to you. Feedback does not include your unrelated User Content."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-33",
      "number": 33,
      "title": "Beta, Testnet and Experimental Features",
      "paragraphs": [
        "DopaMint develops emerging technologies involving AI, autonomous agents, blockchain infrastructure, and digital assets. Certain functionality may be designated alpha, beta, experimental, preview, testnet, developer preview, early access, or similar.",
        "Experimental functionality may be incomplete, unstable, inaccurate, unavailable, substantially changed, or discontinued. Unless expressly stated otherwise, testnet tokens and similar test assets are intended solely for testing and have no intended monetary value. You should not rely on experimental functionality for critical, irreversible, or high-value activities."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-34",
      "number": 34,
      "title": "Security",
      "paragraphs": [
        "DopaMint may implement technical and organizational measures intended to protect the Services. However, no AI system, software platform, wallet, smart contract, blockchain network, or internet service can be guaranteed to be completely secure.",
        "You acknowledge risks including hacking, phishing, malware, wallet compromise, smart-contract exploits, data breaches, software vulnerabilities, and infrastructure failures. You are responsible for maintaining appropriate security practices when using the Services."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-35",
      "number": 35,
      "title": "Availability and Changes to the Services",
      "paragraphs": [
        "DopaMint may modify, update, add, remove, suspend, restrict, or discontinue any part of the Services, including particular agents, AI models, protocols, networks, assets, APIs, integrations, payment methods, tools, or features.",
        "DopaMint does not guarantee uninterrupted availability. Availability may be affected by maintenance, blockchain conditions, third-party outages, infrastructure failures, security incidents, regulatory requirements, legal restrictions, or circumstances beyond our reasonable control."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-36",
      "number": 36,
      "title": "Suspension and Termination",
      "paragraphs": [
        "DopaMint may restrict, suspend, or terminate access to some or all Services where reasonably necessary, including if you violate these Terms; we reasonably suspect fraud, unlawful activity, or a security threat; required by law, a court, governmental authority, or third-party provider; your activity creates material risk to DopaMint, its users, or others; or a Service is discontinued.",
        "Where technically and legally possible, restriction of access to DopaMint does not prevent you from independently accessing assets held in a self-custodial wallet that you control. Termination does not eliminate obligations or liabilities accrued before termination."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-37",
      "number": 37,
      "title": "Assumption of Risk",
      "paragraphs": [
        "Artificial intelligence, autonomous agents, blockchain networks, smart contracts, and digital assets are emerging technologies involving significant and unpredictable risks. By using DopaMint, you acknowledge and accept risks associated with AI errors and hallucinations, misunderstood instructions, autonomous agent actions, software errors, inaccurate or delayed data, transaction failures, market volatility, liquidation, smart contracts, blockchain networks, third-party services, wallet security, cybersecurity incidents, and changing laws and regulations.",
        "You should not authorize an agent to control, transfer, spend, or transact with more value than you are prepared to risk."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-38",
      "number": 38,
      "title": "Disclaimer of Warranties",
      "paragraphs": [
        "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, DOPAMINT AND THE SERVICES ARE PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS. DOPAMINT DISCLAIMS ALL WARRANTIES, EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, ACCURACY, RELIABILITY, AND QUIET ENJOYMENT.",
        "DOPAMINT DOES NOT GUARANTEE THAT THE SERVICES WILL ALWAYS BE AVAILABLE, SECURE, OR ERROR-FREE; THAT OUTPUT WILL BE ACCURATE OR COMPLETE; THAT AN AGENT WILL CORRECTLY INTERPRET AN INSTRUCTION OR SUCCESSFULLY COMPLETE AN ACTION; THAT AN AGENT WILL IDENTIFY THE BEST OR MOST PROFITABLE ACTION; THAT A TRANSACTION WILL EXECUTE AT AN EXPECTED PRICE OR TIME; THAT AN ALERT WILL ARRIVE BEFORE A MARKET EVENT OR LIQUIDATION; THAT ANY DIGITAL ASSET WILL RETAIN OR INCREASE IN VALUE; THAT A THIRD-PARTY SERVICE WILL REMAIN AVAILABLE; OR THAT ALL ERRORS OR DEFECTS WILL BE CORRECTED."
      ],
      "isDisclaimer": true
    },
    {
      "id": "section-39",
      "number": 39,
      "title": "Limitation of Liability",
      "paragraphs": [
        "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, DOPAMINT AND ITS CONTRIBUTORS, SERVICE PROVIDERS, CONTRACTORS, AND LICENSORS WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES ARISING FROM OR RELATING TO YOUR USE OF THE SERVICES, INCLUDING LOSS OF PROFITS, REVENUE, DIGITAL ASSETS, DATA, BUSINESS OPPORTUNITIES, OR GOODWILL.",
        "TO THE MAXIMUM EXTENT PERMITTED BY LAW, DOPAMINT WILL NOT BE RESPONSIBLE FOR LOSSES ARISING FROM AI OUTPUT; AGENT ACTIONS; MISINTERPRETED INSTRUCTIONS; MARKET MOVEMENTS; LIQUIDATIONS; SMART-CONTRACT INTERACTIONS; DIGITAL ASSET TRANSACTIONS; THIRD-PARTY SERVICES; BLOCKCHAIN OR NETWORK FAILURES; WALLET COMPROMISE; TRANSACTION DELAYS OR FAILURES; OR EVENTS OUTSIDE DOPAMINT'S REASONABLE CONTROL.",
        "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, DOPAMINT'S TOTAL AGGREGATE LIABILITY ARISING FROM OR RELATING TO THE SERVICES OR THESE TERMS WILL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID DIRECTLY TO DOPAMINT DURING THE TWELVE MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM OR (B) US$100. WHERE APPLICABLE LAW DOES NOT PERMIT A PARTICULAR LIMITATION OR EXCLUSION, THAT LIMITATION WILL APPLY ONLY TO THE MAXIMUM EXTENT PERMITTED BY LAW."
      ],
      "isDisclaimer": true
    },
    {
      "id": "section-40",
      "number": 40,
      "title": "Indemnification",
      "paragraphs": [
        "To the maximum extent permitted by applicable law, you agree to indemnify, defend, and hold harmless DopaMint and its contributors, contractors, service providers, and licensors from claims, liabilities, damages, losses, and reasonable expenses arising from or relating to your violation of these Terms or applicable law, your misuse of the Services, your User Content, your infringement of another person's rights, or activities undertaken pursuant to authority you granted through the Services, except to the extent liability cannot lawfully be excluded."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-41",
      "number": 41,
      "title": "Privacy",
      "paragraphs": [
        "Our collection, processing, use, retention, and disclosure of personal information are described in the DopaMint Privacy Policy. Blockchain networks may be public, and information submitted to a public blockchain may become permanently publicly accessible and may not be capable of being modified or deleted by DopaMint. You should review the Privacy Policy before using the Services."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-42",
      "number": 42,
      "title": "Electronic Communications",
      "paragraphs": [
        "By providing contact information or using DopaMint, you agree that we may send you service-related electronic communications, including account notices, security alerts, transaction information, service announcements, and updates to these Terms. Marketing communications, where applicable, will be subject to relevant consent and opt-out requirements."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-43",
      "number": 43,
      "title": "Changes to These Terms",
      "paragraphs": [
        "We may update these Terms to reflect changes to DopaMint, applicable laws, regulations, technology, security requirements, or the Services. When these Terms are updated, we will revise the \"Last Updated\" date and, where required by law, provide additional notice of material changes.",
        "Your continued use of DopaMint after updated Terms become effective constitutes acceptance of the updated Terms. If you do not agree to an updated version, stop using the Services."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-44",
      "number": 44,
      "title": "Force Majeure",
      "paragraphs": [
        "DopaMint will not be responsible for delays, interruptions, failures, or losses caused by circumstances beyond our reasonable control, including natural disasters, war, civil unrest, governmental actions, internet or telecommunications failures, blockchain failures, network congestion, third-party outages, cyberattacks, power failures, or similar events."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-45",
      "number": 45,
      "title": "Severability",
      "paragraphs": [
        "If any provision of these Terms is found to be invalid, unlawful, or unenforceable, that provision will apply to the maximum extent permitted by law and the remaining provisions will remain in effect."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-46",
      "number": 46,
      "title": "No Waiver",
      "paragraphs": [
        "Our failure to enforce any provision of these Terms does not waive our right to enforce that provision or any other provision later."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-47",
      "number": 47,
      "title": "Assignment",
      "paragraphs": [
        "You may not assign or transfer your rights or obligations under these Terms without DopaMint's prior written consent. DopaMint may assign or transfer these Terms in connection with a merger, acquisition, financing, corporate restructuring, sale of assets, transfer of the Services, or to an affiliate or successor, subject to applicable law."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-48",
      "number": 48,
      "title": "Entire Agreement",
      "paragraphs": [
        "These Terms, together with the DopaMint Privacy Policy and any additional terms expressly presented in connection with a particular Service, constitute the agreement governing your use of DopaMint and supersede prior understandings concerning the same subject matter, except where a separate written agreement expressly provides otherwise."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-49",
      "number": 49,
      "title": "Survival",
      "paragraphs": [
        "Provisions that by their nature should survive suspension or termination will remain effective, including provisions concerning intellectual property, risk, disclaimers, limitation of liability, indemnification, and accrued rights or obligations."
      ],
      "isDisclaimer": false
    },
    {
      "id": "section-50",
      "number": 50,
      "title": "Contact",
      "paragraphs": [
        "If you have questions about these Terms & Conditions, you can contact DopaMint through the official communication channels made available on our website.",
        "Website: dopamint.xyz",
        "© 2026 DopaMint. All rights reserved."
      ],
      "isDisclaimer": false
    }
  ]
};
