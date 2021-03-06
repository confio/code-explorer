import { codec } from "@cosmjs/cosmwasm-stargate";
import React, { Fragment } from "react";

import { AccountLink } from "../../../components/AccountLink";
import { ContractLink } from "../../../components/ContractLink";
import { printableBalance } from "../../../ui-utils";

type IMsgExecuteContract = codec.cosmwasm.wasm.v1beta1.IMsgExecuteContract;

interface Props {
  readonly msg: IMsgExecuteContract;
}

export function MsgExecuteContract({ msg }: Props): JSX.Element {
  return (
    <Fragment>
      <li className="list-group-item">
        Contract: <ContractLink address={msg.contract ?? "-"} maxLength={null} />
      </li>
      <li className="list-group-item">
        Sender: <AccountLink address={msg.sender ?? "-"} maxLength={null} />
      </li>
      <li className="list-group-item">Sent funds: {printableBalance(msg.sentFunds ?? [])}</li>
      <li className="list-group-item">
        <span title="The contract level message">Handle message</span>:{" "}
        <pre className="mb-0">{JSON.stringify(msg.msg, null, "  ")}</pre>
      </li>
    </Fragment>
  );
}
