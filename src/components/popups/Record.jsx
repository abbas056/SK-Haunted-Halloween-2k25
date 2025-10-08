import React, { useEffect, useState } from "react";
import RewardHistory from "./RewardHistory";
import { useEventRecordsTab1, useRechargeRecordsTab1 } from "../../hooks/queries/useTab1Query";
import useUserStore from "../../store/userStore";
import { useEventRecordsTab3 } from "../../hooks/queries/useTab3Query";

export function RecordPopupTabOne() {
  const { user } = useUserStore();
  const [pageIndex, setPageIndex] = useState(1);
  const [pageIndexRecharge, setPageIndexRecharge] = useState(1);
  const [record, setRecord] = useState([]);
  const [rechargeRecord, setRechargeRecord] = useState([]);
  const { data: recordsHistory, isLoading } = useEventRecordsTab1(user?.uid, pageIndex);
  const { data: rechargeHistory, loading } = useRechargeRecordsTab1(user?.uid, pageIndexRecharge);

  useEffect(() => {
    if (recordsHistory && recordsHistory?.list?.length > 0) {
      if (pageIndex === 1) {
        setRecord([recordsHistory?.list]);
      } else {
        setRecord((prev) => [...prev, recordsHistory?.list]);
      }
    }
  }, [recordsHistory]);

  useEffect(() => {
    if (rechargeHistory && rechargeHistory?.list?.length > 0) {
      if (pageIndexRecharge === 1) {
        setRechargeRecord([rechargeHistory?.list]);
      } else {
        setRechargeRecord((prev) => [...prev, rechargeHistory?.list]);
      }
    }
  }, [rechargeHistory]);

  let pageCount = recordsHistory?.pageCount;
  let seemoreCondition = pageIndex < pageCount;
  let latestRecord = record?.flat();
  if (isLoading) return <div className="text-white text-center block">Loading...</div>;

  let rechargePageCount = rechargeHistory?.pageCount;
  let rechargeSeemoreCondition = pageIndexRecharge < rechargePageCount;
  let rechargeLatestRecord = rechargeRecord?.flat();
  if (loading) return <div className="text-white text-center block">Loading...</div>;
  return (
    <RewardHistory
      header={["Time (GMT)", "Item Name", "Treat Points", "Rewards"]}
      header2={["Time (GMT)", "Rewards"]}
      data={latestRecord}
      tab={1}
      setPageIndex={setPageIndex}
      setPageIndexRecharge={setPageIndexRecharge}
      rechargeIndex={pageIndexRecharge}
      seemoreCondition={seemoreCondition}
      pageIndex={pageIndex}
      rechargeData={rechargeLatestRecord}
      seemoreConditionRecharge={rechargeSeemoreCondition}
    />
  );
}

export function RecordPopupTabThree({ tab }) {
  const { user } = useUserStore();
  const [pageIndex, setPageIndex] = useState(1);
  const [record, setRecord] = useState([]);
  const { data: recordsHistory, isLoading } = useEventRecordsTab3(user?.uid, pageIndex);

  useEffect(() => {
    if (recordsHistory && recordsHistory?.list?.length > 0 && record?.length === 0) {
      if (pageIndex === 1) {
        setRecord(recordsHistory?.list);
      } else {
        setRecord((prev) => [...prev, recordsHistory?.list]);
      }
    }
  }, [recordsHistory]);

  let pageCount = recordsHistory?.pageCount;
  let seemoreCondition = pageIndex < pageCount;
  let latestRecord = record?.flat();
  if (isLoading) return <div className="text-white text-center block">Loading...</div>;
  return (
    <RewardHistory
      header={["Time (GMT)", "Rewards"]}
      data={latestRecord}
      tab={tab}
      setPageIndex={setPageIndex}
      seemoreCondition={seemoreCondition}
      pageIndex={pageIndex}
    />
  );
}
