import useTitle from "../../hooks/useTitle";
import { getUserOrders } from "../../services";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";
import { useEffect, useState } from "react";
import {toast} from "react-toastify";

export const DashboardPage = ({title}) => {
  const [orders, setOrders] = useState([]);
  const pageTitle = useTitle(title);

  useEffect(() => {
    async function getOrders() {
      try {
        const data = await getUserOrders();
        setOrders(data);
      }
      catch(error) {
        toast.error(error.message, {position: "bottom-center"});
      }
    }
    getOrders();
  }, []);

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
      </section>

      <section>
        { orders.length && orders.map((order) => (
          <DashboardCard key={order.id} order={order} />
        )) }
      </section>

      <section>
        { !orders.length && <DashboardEmpty /> }
      </section>

    </main>
  )
}