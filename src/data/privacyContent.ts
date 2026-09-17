export interface PrivacyItem {
  type: "paragraph" | "bullet" | "subheading";
  text: string;
}

export interface PrivacySection {
  id: string;
  number: number;
  title: string;
  items: PrivacyItem[];
}

export interface PrivacyData {
  title: string;
  lastUpdated: string;
  effectiveDate: string;
  intro: string[];
  sections: PrivacySection[];
}

export const PRIVACY_DATA: PrivacyData = {
  "title": "Privacy Policy",
  "lastUpdated": "March 2026",
  "effectiveDate": "March 2026",
  "intro": [
    "This Privacy Policy (“Privacy Policy”) describes the types of personal data that DopaMint (“DopaMint,” “we,” “our,” and/or “us”) collects, uses, and discloses from individuals (“you” or “your”) who use our website at https://dopamint.xyz/ and our related services (collectively, the “Service”).",
    "DopaMint is a House of Intent-based Agents built on Base. The Service allows users to express objectives, interact with AI agents, access financial intelligence, connect wallets, and interact with supported onchain applications and services.",
    "As used in this Privacy Policy, “personal data” means any information relating to an identified or identifiable individual and includes any information that constitutes “personally identifiable information,” “personal data,” or “personal information” under applicable privacy or data protection laws or regulations.",
    "Your use of the Service is also subject to our Terms of Service."
  ],
  "sections": [
    {
      "id": "privacy-1",
      "number": 1,
      "title": "Personal Data We Collect",
      "items": [
        {
          "type": "paragraph",
          "text": "We may collect personal data from or about you, your devices, and your interactions with the Service, as described below. The information we collect depends on how you use DopaMint and the features you access."
        },
        {
          "type": "subheading",
          "text": "A. Personal Data You Provide to Us"
        },
        {
          "type": "subheading",
          "text": "Registration and Account Information"
        },
        {
          "type": "paragraph",
          "text": "Depending on how you access the Service, we may collect:"
        },
        {
          "type": "bullet",
          "text": "Account Information: Your email address, username, account identifier, and other information required to create or manage an account."
        },
        {
          "type": "bullet",
          "text": "Wallet Information: If you connect a blockchain wallet, we may collect and record your public wallet address, blockchain network, transaction-related information, and other publicly available onchain information associated with that address. We do not request or collect your private keys or seed phrases."
        },
        {
          "type": "bullet",
          "text": "Third-Party Account Information: If you sign up or connect through a third-party service, we may receive information that the service provides to us, such as your email address, profile information, or account identifier."
        },
        {
          "type": "bullet",
          "text": "Communications: If you contact us, we may receive your name, email address, message contents, attachments, and other information you choose to provide."
        },
        {
          "type": "bullet",
          "text": "Events, Surveys, and Community Activities: We may collect information you provide when participating in events, surveys, campaigns, or community activities."
        },
        {
          "type": "bullet",
          "text": "Other Information You Provide: We may collect other information you voluntarily submit through the Service or in communications with us."
        },
        {
          "type": "subheading",
          "text": "Payment Information"
        },
        {
          "type": "paragraph",
          "text": "If you make a payment through the Service, payment-related information may be collected by our third-party payment processors or blockchain service providers. Depending on the payment method, we may receive information such as transaction identifiers, wallet addresses, payment amounts, asset types, network information, and payment status."
        },
        {
          "type": "paragraph",
          "text": "We do not collect or store complete credit-card details unless expressly stated at the time of collection."
        },
        {
          "type": "subheading",
          "text": "Agent Interactions and User Intent"
        },
        {
          "type": "paragraph",
          "text": "The Service allows you to submit natural-language instructions, prompts, preferences, files, and other materials to DopaMint’s agents (“Prompts”). These Prompts may be used to interpret your intent, coordinate specialized agents, provide financial or other information, and facilitate actions you authorize."
        },
        {
          "type": "paragraph",
          "text": "Depending on the features you use, we may collect:"
        },
        {
          "type": "bullet",
          "text": "Prompts and instructions submitted to the Service;"
        },
        {
          "type": "bullet",
          "text": "Agent responses and outputs;"
        },
        {
          "type": "bullet",
          "text": "Preferences, configurations, and permissions;"
        },
        {
          "type": "bullet",
          "text": "Information about tasks initiated, completed, or cancelled;"
        },
        {
          "type": "bullet",
          "text": "Transaction requests, execution status, and related activity; and"
        },
        {
          "type": "bullet",
          "text": "Feedback, ratings, or other information you provide about agent performance."
        },
        {
          "type": "subheading",
          "text": "B. Personal Data We Collect When You Use the Service"
        },
        {
          "type": "subheading",
          "text": "Location Information"
        },
        {
          "type": "paragraph",
          "text": "We may collect or infer general location information, such as approximate location derived from your IP address, to provide, secure, or improve the Service."
        },
        {
          "type": "subheading",
          "text": "Device Information"
        },
        {
          "type": "paragraph",
          "text": "We may receive information about the device and software you use to access the Service, including IP address, device type, browser type and version, operating system, device identifiers, and related technical information."
        },
        {
          "type": "subheading",
          "text": "Usage Information"
        },
        {
          "type": "paragraph",
          "text": "We may automatically collect information about your interactions with the Service, including pages viewed, features used, referring pages, dates and times of access, account activity, agent interactions, transaction requests, and other usage events."
        },
        {
          "type": "subheading",
          "text": "Onchain and Transaction Information"
        },
        {
          "type": "paragraph",
          "text": "When you connect a wallet or authorize an onchain action, we may process information necessary to facilitate that action, including:"
        },
        {
          "type": "bullet",
          "text": "Public wallet addresses;"
        },
        {
          "type": "bullet",
          "text": "Blockchain network and chain identifiers;"
        },
        {
          "type": "bullet",
          "text": "Transaction hashes and statuses;"
        },
        {
          "type": "bullet",
          "text": "Asset types and transaction amounts;"
        },
        {
          "type": "bullet",
          "text": "Smart-contract addresses and protocol interactions;"
        },
        {
          "type": "bullet",
          "text": "Gas fees and execution details; and"
        },
        {
          "type": "bullet",
          "text": "Information publicly available on the relevant blockchain."
        },
        {
          "type": "paragraph",
          "text": "Blockchain networks are generally public. Information recorded on a blockchain may be permanently available to others and may not be capable of being deleted, modified, or restricted by us."
        },
        {
          "type": "subheading",
          "text": "Cookies and Similar Technologies"
        },
        {
          "type": "paragraph",
          "text": "We and our third-party partners may use cookies, SDKs, pixels, and similar technologies to collect information about your activities on the Service. These technologies may support authentication, security, analytics, preferences, and service functionality."
        }
      ]
    },
    {
      "id": "privacy-2",
      "number": 2,
      "title": "How We Use the Personal Data We Collect",
      "items": [
        {
          "type": "paragraph",
          "text": "We may use personal data to:"
        },
        {
          "type": "bullet",
          "text": "Provide, operate, maintain, and improve the Service;"
        },
        {
          "type": "bullet",
          "text": "Interpret user intent and coordinate agents;"
        },
        {
          "type": "bullet",
          "text": "Provide AIFI, financial intelligence, and other requested services;"
        },
        {
          "type": "bullet",
          "text": "Facilitate authorized transactions, payments, and onchain interactions;"
        },
        {
          "type": "bullet",
          "text": "Connect users to wallets, protocols, APIs, data providers, and other services;"
        },
        {
          "type": "bullet",
          "text": "Maintain account security and manage permissions;"
        },
        {
          "type": "bullet",
          "text": "Monitor and prevent fraud, abuse, unauthorized activity, and security incidents;"
        },
        {
          "type": "bullet",
          "text": "Communicate with you and respond to inquiries;"
        },
        {
          "type": "bullet",
          "text": "Analyze usage and develop new products, services, features, and functionality;"
        },
        {
          "type": "bullet",
          "text": "Generate aggregated or de-identified information for lawful purposes;"
        },
        {
          "type": "bullet",
          "text": "Process payments and related administrative activities;"
        },
        {
          "type": "bullet",
          "text": "Comply with applicable laws, regulations, legal process, and contractual obligations; and"
        },
        {
          "type": "bullet",
          "text": "Carry out other purposes disclosed at the time of collection or with your consent."
        }
      ]
    },
    {
      "id": "privacy-3",
      "number": 3,
      "title": "AI Agents, Model Providers, and Third-Party Services",
      "items": [
        {
          "type": "paragraph",
          "text": "DopaMint may use third-party AI model providers, infrastructure providers, data providers, blockchain services, wallet providers, analytics providers, and other vendors to operate the Service."
        },
        {
          "type": "paragraph",
          "text": "Depending on the feature used, these providers may process information necessary to:"
        },
        {
          "type": "bullet",
          "text": "Generate agent responses;"
        },
        {
          "type": "bullet",
          "text": "Interpret Prompts and user intent;"
        },
        {
          "type": "bullet",
          "text": "Retrieve financial, market, or other data;"
        },
        {
          "type": "bullet",
          "text": "Execute or verify transactions;"
        },
        {
          "type": "bullet",
          "text": "Provide wallet and blockchain connectivity; and"
        },
        {
          "type": "bullet",
          "text": "Facilitate payments and other requested services."
        },
        {
          "type": "paragraph",
          "text": "We use reasonable contractual and technical measures appropriate to the services we use. You should not submit private keys, seed phrases, passwords, or other sensitive credentials to DopaMint or its agents."
        }
      ]
    },
    {
      "id": "privacy-4",
      "number": 4,
      "title": "How We Disclose the Personal Data We Collect",
      "items": [
        {
          "type": "paragraph",
          "text": "We may disclose personal data to the following categories of recipients:"
        },
        {
          "type": "subheading",
          "text": "Service Providers and Vendors"
        },
        {
          "type": "paragraph",
          "text": "We may share personal data with third-party providers that support hosting, infrastructure, AI model processing, wallet connectivity, blockchain data, analytics, payment processing, security, customer support, and other business operations."
        },
        {
          "type": "subheading",
          "text": "Blockchain Networks and Protocols"
        },
        {
          "type": "paragraph",
          "text": "When you authorize an onchain transaction, relevant transaction information may be transmitted to blockchain networks, protocols, wallet providers, RPC providers, and other services necessary to execute or verify the transaction. Information recorded on public blockchains may be publicly accessible."
        },
        {
          "type": "subheading",
          "text": "Partners and Affiliates"
        },
        {
          "type": "paragraph",
          "text": "We may disclose personal data to current or future affiliates or partners for purposes described in this Privacy Policy, subject to applicable law."
        },
        {
          "type": "subheading",
          "text": "Analytics Providers"
        },
        {
          "type": "paragraph",
          "text": "We may use analytics services to understand how users interact with the Service and improve performance, security, and functionality."
        },
        {
          "type": "subheading",
          "text": "Legal and Safety Disclosures"
        },
        {
          "type": "paragraph",
          "text": "We may access, preserve, or disclose personal data if we believe it is reasonably necessary to:"
        },
        {
          "type": "bullet",
          "text": "Comply with applicable law, legal process, or governmental requests;"
        },
        {
          "type": "bullet",
          "text": "Protect the rights, property, or safety of DopaMint, our users, or others;"
        },
        {
          "type": "bullet",
          "text": "Investigate fraud, abuse, or unlawful activity;"
        },
        {
          "type": "bullet",
          "text": "Enforce our Terms of Service or other agreements; or"
        },
        {
          "type": "bullet",
          "text": "Protect against legal liability."
        },
        {
          "type": "subheading",
          "text": "Corporate Transactions"
        },
        {
          "type": "paragraph",
          "text": "We may transfer personal data in connection with a merger, acquisition, financing, reorganization, sale of assets, or other corporate transaction."
        },
        {
          "type": "subheading",
          "text": "With Your Consent"
        },
        {
          "type": "paragraph",
          "text": "We may disclose personal data with your permission or at your direction."
        }
      ]
    },
    {
      "id": "privacy-5",
      "number": 5,
      "title": "Legal Bases for Processing European Personal Data",
      "items": [
        {
          "type": "paragraph",
          "text": "To the extent required by applicable law, if you are located in the European Economic Area, Switzerland, or the United Kingdom, we process personal data only when we have a valid legal basis, including:"
        },
        {
          "type": "bullet",
          "text": "Consent: You have consented to the processing of your personal data."
        },
        {
          "type": "bullet",
          "text": "Contractual Necessity: Processing is necessary to provide the Service or fulfill our agreement with you."
        },
        {
          "type": "bullet",
          "text": "Legal Obligation: Processing is necessary to comply with applicable law."
        },
        {
          "type": "bullet",
          "text": "Legitimate Interests: Processing is necessary for our legitimate interests, such as improving the Service, maintaining security, preventing abuse, and operating our business, provided those interests are not overridden by your rights and interests."
        }
      ]
    },
    {
      "id": "privacy-6",
      "number": 6,
      "title": "Your Rights and Choices",
      "items": [
        {
          "type": "paragraph",
          "text": "Depending on your location and applicable law, you may have rights to:"
        },
        {
          "type": "bullet",
          "text": "Access the personal data we maintain about you;"
        },
        {
          "type": "bullet",
          "text": "Request correction of inaccurate personal data;"
        },
        {
          "type": "bullet",
          "text": "Request deletion of personal data, subject to legal and operational exceptions;"
        },
        {
          "type": "bullet",
          "text": "Request restriction of processing;"
        },
        {
          "type": "bullet",
          "text": "Object to certain processing;"
        },
        {
          "type": "bullet",
          "text": "Request portability of personal data you have provided;"
        },
        {
          "type": "bullet",
          "text": "Withdraw consent where processing is based on consent; and"
        },
        {
          "type": "bullet",
          "text": "Lodge a complaint with a relevant supervisory authority."
        },
        {
          "type": "paragraph",
          "text": "You may also unsubscribe from promotional communications using the instructions provided in those communications. You may continue to receive administrative or service-related messages."
        },
        {
          "type": "paragraph",
          "text": "To exercise your rights, contact us using the contact details provided on https://dopamint.xyz/. We may request reasonable information to verify your identity before processing a request."
        },
        {
          "type": "paragraph",
          "text": "Please note that certain information, including information recorded on public blockchains, may not be capable of being deleted or modified. We may also retain information where necessary for security, fraud prevention, legal compliance, dispute resolution, backups, or other lawful purposes."
        }
      ]
    },
    {
      "id": "privacy-7",
      "number": 7,
      "title": "Third-Party Services",
      "items": [
        {
          "type": "paragraph",
          "text": "The Service may contain links to or integrations with third-party websites, applications, wallets, protocols, APIs, AI model providers, and other services that we do not own or operate."
        },
        {
          "type": "paragraph",
          "text": "This Privacy Policy does not apply to the privacy practices of those third parties. Their processing of your information is governed by their own privacy policies and terms. We encourage you to review those policies before using third-party services or providing personal data to them."
        }
      ]
    },
    {
      "id": "privacy-8",
      "number": 8,
      "title": "Retention",
      "items": [
        {
          "type": "paragraph",
          "text": "We retain personal data for as long as reasonably necessary to provide the Service, fulfill the purposes described in this Privacy Policy, maintain business and transaction records, comply with legal obligations, resolve disputes, prevent fraud and abuse, and enforce our agreements."
        },
        {
          "type": "paragraph",
          "text": "Retention periods may vary depending on the type of information, the nature of the Service, the user relationship, and applicable legal requirements."
        },
        {
          "type": "paragraph",
          "text": "Information recorded on public blockchains may remain publicly available indefinitely and is generally outside our ability to delete or modify."
        }
      ]
    },
    {
      "id": "privacy-9",
      "number": 9,
      "title": "Security",
      "items": [
        {
          "type": "paragraph",
          "text": "We use reasonable technical and organizational measures designed to protect personal data against unauthorized access, loss, misuse, alteration, or disclosure."
        },
        {
          "type": "paragraph",
          "text": "However, no electronic transmission, storage system, blockchain network, or internet-based service can be guaranteed to be completely secure. You are responsible for protecting your wallet credentials and should never share private keys or seed phrases with DopaMint or any agent."
        }
      ]
    },
    {
      "id": "privacy-10",
      "number": 10,
      "title": "Children’s Privacy",
      "items": [
        {
          "type": "paragraph",
          "text": "The Service is not directed to children under 13 years of age, or such higher age as may be required by applicable law. We do not knowingly collect personal data from children in violation of applicable law."
        },
        {
          "type": "paragraph",
          "text": "If you believe a child has provided personal data to us, please contact us through https://dopamint.xyz/."
        }
      ]
    },
    {
      "id": "privacy-11",
      "number": 11,
      "title": "International Transfers",
      "items": [
        {
          "type": "paragraph",
          "text": "DopaMint and its service providers may process and store personal data in countries other than the country in which you reside."
        },
        {
          "type": "paragraph",
          "text": "Where required by applicable law, we will use appropriate safeguards for international transfers of personal data, which may include contractual protections, adequacy decisions, or other legally recognized transfer mechanisms."
        }
      ]
    },
    {
      "id": "privacy-12",
      "number": 12,
      "title": "Changes to this Privacy Policy",
      "items": [
        {
          "type": "paragraph",
          "text": "We may update this Privacy Policy from time to time. We will post the revised version on https://dopamint.xyz/ and update the “Last Updated” date. Changes will become effective when posted, unless otherwise required by applicable law."
        }
      ]
    },
    {
      "id": "privacy-13",
      "number": 13,
      "title": "Contact Information",
      "items": [
        {
          "type": "paragraph",
          "text": "If you have questions, comments, or concerns about this Privacy Policy or our processing of personal data, please contact us through https://dopamint.xyz/."
        }
      ]
    }
  ]
};
