export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <>
      <div>{children} </div>
      <div
        style={{
          display: "flex",
          backgroundColor: "gray",
          justifyContent: "space-around",
          height: "500px",
          alignItems: "center",
        }}
      >
        <div style={{ width: "50%", display:'flex', flexDirection: "column" }}>
          <div style={{ height: "200px"}}>
            {users}
          </div>
          <div style={{ height: "200px" }}>{revenue}</div>
        </div>
        <div style={{ width: "50%" }}>{notifications}</div>
      </div>
    </>
  );
}
