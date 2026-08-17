import React from 'react';

interface MacCodeCardProps {
  title?: string;
  description?: string;
  tags?: string[];
  code?: string;
  className?: string;
}

export const MacCodeCard: React.FC<MacCodeCardProps> = ({
  title = "policy.payments-v2.ts",
  description = "Deterministic capability gate executed before every agent transaction.",
  tags = ["POL-882", "ENCLAVE-VERIFIED"],
  code = `export async function verifyAction(intent: AgentIntent) {
  const cap = await Enclave.getDailyCap(intent.agentId);
  if (intent.amount > cap.perAction) {
    return { status: "BLOCKED", reason: "Exceeds per-action cap" };
  }
  const receipt = await Enclave.signReceipt(intent);
  return { status: "APPROVED", receiptHash: receipt.merkleRoot };
}`,
  className = "",
}) => {
  return (
    <div className={`mac-code-card ${className}`}>
      <div className="mac-header">
        <span className="red"></span>
        <span className="yellow"></span>
        <span className="green"></span>
      </div>
      <span className="mac-card-title">{title}</span>
      <p className="mac-card-description">{description}</p>
      <div>
        {tags.map((tag, i) => (
          <span key={i} className="mac-card-tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="mac-code-editor">
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};
