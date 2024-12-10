import { useMemo } from "react";
import { useIntl } from "react-intl";

import data from "@/constants/data.json";

const useEmailLink = (address = data.contact.email) => {
  const intl = useIntl();

  return useMemo(() => {
    const subject = intl.formatMessage({ id: "email.subject" });
    const body = intl.formatMessage({ id: "email.body" });

    return `mailto:${address}?${new URLSearchParams({
      subject,
      body,
    }).toString()}`;
  }, [address, intl]);
};

export default useEmailLink;
