import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";

interface Order {
  id: string;
  date: string;
  status: "completed" | "pending" | "cancelled";
  items: {
    propertyId: string;
    address: string;
    dataType: string;
    price: number;
  }[];
}

// Mock data - replace with real API calls later
const mockOrders: Order[] = [
  {
    id: "ORD-001",
    date: "2024-02-20",
    status: "completed",
    items: [
      {
        propertyId: "PROP-001",
        address: "123 Main St, City, State",
        dataType: "Property Analysis",
        price: 299,
      },
    ],
  },
  {
    id: "ORD-002",
    date: "2024-02-19",
    status: "pending",
    items: [
      {
        propertyId: "PROP-002",
        address: "456 Oak Ave, Town, State",
        dataType: "Market Report",
        price: 199,
      },
    ],
  },
];

const Orders = () => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Orders</h2>
          <div className="space-y-4">
            {mockOrders.map((order) => (
              <div
                key={order.id}
                className={`p-4 rounded-lg cursor-pointer transition-colors ${
                  selectedOrder?.id === order.id
                    ? "bg-accent"
                    : "bg-white hover:bg-accent/50"
                }`}
                onClick={() => setSelectedOrder(order)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Order #{order.id}</h3>
                    <p className="text-sm text-gray-500">{order.date}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      order.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : order.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
          {selectedOrder ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Order ID</p>
                  <p className="font-medium">{selectedOrder.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium">{selectedOrder.date}</p>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Items</h3>
                {selectedOrder.items.map((item) => (
                  <div
                    key={item.propertyId}
                    className="bg-muted p-4 rounded-lg space-y-2"
                  >
                    <p className="font-medium">{item.address}</p>
                    <p className="text-sm text-gray-500">{item.dataType}</p>
                    <p className="text-primary font-medium">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              Select an order to view details
            </div>
          )}
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Orders;