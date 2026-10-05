import { Page } from "../App";
import {
  BusIcon, UsersIcon, CheckCircleIcon, AlertTriangleIcon,
  ChevronRightIcon, PlusIcon, MegaphoneIcon, SearchIcon, UserCogIcon, FileTextIcon
} from "../App";

interface Props { navigate: (page: Page, extra?: any) => void; }

const ROUTE_STATUSES = [
  { name: "Route 1", status: "On Time", students: "28 / 28" },
  { name: "Route 2", status: "On Time", students: "32 / 32" },
  { name: "Route 3", status: "On Time", students: "26 / 26" },
  { name: "Route 4", status: "12 min delay", students: "24 / 26" },
  { name: "Route 5", status: "On Time", students: "30 / 30" },
];

const BUS_PINS = [
  { label: "Route 4", sub: "On Time", info: "42 km/h", color: "#16a34a", top: "22%", left: "20%" },
  { label: "Route 7", sub: "12 min delay", info: "28 km/h", color: "#d97706", top: "28%", left: "54%" },
  { label: "Route 2", sub: "On Time", info: "35 km/h", color: "#16a34a", top: "55%", left: "25%" },
  { label: "Route 1", sub: "On Time", info: "38 km/h", color: "#16a34a", top: "62%", left: "65%" },
];

export default function Dashboard({ navigate }: Props) {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--text)" }}>
            Good Morning, Dr. Ananya Rao!
          </h1>
          <p className="text-sm mt-0.5" style={{ color: "var(--text-secondary)" }}>
            Here's what's happening at your school today.
          </p>
        </div>
        <div
          className="flex items-start gap-2 px-4 py-3 rounded-xl text-sm italic"
          style={{ background: "#eff6ff", border: "1px solid #bfdbfe", maxWidth: 260 }}
        >
          <span className="text-2xl leading-none" style={{ color: "#2563eb" }}>"</span>
          <div>
            <p style={{ color: "#1e40af" }}>"Better students. Brighter tomorrows."</p>
            <p className="text-xs mt-1 not-italic font-medium" style={{ color: "#3b82f6" }}>– EduCare</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-6 gap-3 mb-6">
        <StatCard icon={<UsersIcon size={22} color="#2563eb" />} bg="#dbeafe" label="Total Students" value="1,248" sub="+12% vs. last month" subColor="#16a34a" />
        <StatCard icon={<CheckCircleIcon size={22} color="#16a34a" />} bg="#dcfce7" label="Present Today" value="1,196" sub="95.8%" subColor="#16a34a" />
        <StatCard icon={<UserXIcon size={22} color="#dc2626" />} bg="#fee2e2" label="Absent Today" value="52" sub="4.2%" subColor="#dc2626" />
        <StatCard icon={<BusIcon size={22} color="#2563eb" />} bg="#dbeafe" label="Total Buses" value="18" sub="Active Today" subColor="#64748b" />
        <StatCard icon={<CheckCircleIcon size={22} color="#16a34a" />} bg="#dcfce7" label="On Time" value="16" sub="88.9%" subColor="#16a34a" />
        <StatCard icon={<ClockDelayIcon size={22} color="#d97706" />} bg="#fef3c7" label="Delayed" value="2" sub="11.1%" subColor="#d97706" />
      </div>

      <div className="grid gap-5" style={{ gridTemplateColumns: "1fr 280px" }}>
        {/* Map */}
        <div>
          <div className="bg-white rounded-xl p-4" style={{ border: "1px solid var(--border)" }}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <h2 className="font-semibold text-sm" style={{ color: "var(--text)" }}>Live Transport Tracking</h2>
                <span className="flex items-center gap-1 text-xs" style={{ color: "var(--text-secondary)" }}>
                  <span className="w-2 h-2 rounded-full inline-block" style={{ background: "#16a34a" }} />
                  18 buses currently running
                </span>
              </div>
              <button
                className="text-xs font-medium px-3 py-1.5 rounded-lg"
                style={{ background: "#eff6ff", color: "#2563eb" }}
                onClick={() => navigate("transport")}
              >
                View Full Map
              </button>
            </div>

            {/* Map area */}
            <div className="map-container" style={{ height: 280 }}>
              <div className="map-bg" />
              {/* Road lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.5 }}>
                <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#b0c4b0" strokeWidth="2" />
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#b0c4b0" strokeWidth="2" />
                <line x1="20%" y1="0" x2="80%" y2="100%" stroke="#b0c4b0" strokeWidth="1.5" />
                <line x1="80%" y1="0" x2="20%" y2="100%" stroke="#c8a060" strokeWidth="3" />
                <line x1="0" y1="30%" x2="100%" y2="70%" stroke="#c8a060" strokeWidth="2.5" />
              </svg>
              {/* City label */}
              <div className="absolute font-bold text-sm" style={{ color: "#555", top: "48%", left: "38%" }}>Bengaluru</div>
              <div className="absolute text-xs" style={{ color: "#888", top: "18%", left: "55%" }}>WHITEFIELD</div>
              <div className="absolute text-xs" style={{ color: "#888", top: "72%", left: "60%" }}>MARATHAHALLI</div>
              <div className="absolute text-xs" style={{ color: "#888", top: "72%", left: "36%" }}>KORAMANGALA</div>
              <div className="absolute text-xs" style={{ color: "#888", top: "14%", left: "38%" }}>YELAHANKA</div>

              {/* Bus pins */}
              {BUS_PINS.map((pin) => (
                <div key={pin.label} className="bus-pin" style={{ top: pin.top, left: pin.left }}>
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded flex items-center justify-center" style={{ background: pin.color }}>
                      <BusIcon size={11} color="white" />
                    </div>
                    <span style={{ color: "var(--text)", fontSize: 12 }}>{pin.label}</span>
                  </div>
                  <span style={{ color: pin.color, fontSize: 11 }}>{pin.sub}</span>
                  <span style={{ color: "#94a3b8", fontSize: 10 }}>{pin.info}</span>
                </div>
              ))}

              {/* Toggle */}
              <div className="absolute top-3 right-3 flex rounded-lg overflow-hidden shadow-sm" style={{ background: "white" }}>
                <button className="px-3 py-1.5 text-xs font-semibold" style={{ background: "#2563eb", color: "white" }}>Buses</button>
                <button className="px-3 py-1.5 text-xs font-medium" style={{ color: "#64748b" }}>Stops</button>
              </div>
              {/* Controls */}
              <div className="absolute bottom-3 right-3 flex flex-col gap-1">
                <button className="w-7 h-7 bg-white rounded shadow text-lg font-bold flex items-center justify-center" style={{ color: "#555" }}>+</button>
                <button className="w-7 h-7 bg-white rounded shadow text-lg font-bold flex items-center justify-center" style={{ color: "#555" }}>−</button>
              </div>
              <div className="absolute text-xs font-bold" style={{ color: "#9acd32", bottom: 8, left: 10 }}>Google</div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4">
          {/* Transport Status */}
          <div className="bg-white rounded-xl p-4" style={{ border: "1px solid var(--border)" }}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-sm" style={{ color: "var(--text)" }}>Today's Transport Status</h3>
              <button className="text-xs font-medium" style={{ color: "#2563eb" }} onClick={() => navigate("transport")}>View All</button>
            </div>
            <div className="space-y-2.5">
              {ROUTE_STATUSES.map((r) => {
                const delayed = r.status.includes("delay");
                return (
                  <div key={r.name} className="flex items-center gap-2">
                    <BusIcon size={14} color="#94a3b8" />
                    <span className="text-sm font-medium flex-1" style={{ color: "var(--text)" }}>{r.name}</span>
                    <span
                      className="route-badge"
                      style={{
                        background: delayed ? "#fef3c7" : "#dcfce7",
                        color: delayed ? "#d97706" : "#16a34a",
                      }}
                    >
                      {r.status}
                    </span>
                    <span className="text-xs" style={{ color: "var(--text-muted)", minWidth: 48, textAlign: "right" }}>{r.students}</span>
                    <ChevronRightIcon size={12} color="#cbd5e1" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl p-4" style={{ border: "1px solid var(--border)" }}>
            <h3 className="font-semibold text-sm mb-3" style={{ color: "var(--text)" }}>Quick Actions</h3>
            <div className="space-y-2">
              <button className="action-btn" onClick={() => navigate("announcements")}>
                <MegaphoneIcon size={15} color="#2563eb" />
                <span>Create Announcement</span>
              </button>
              <button className="action-btn" onClick={() => navigate("transport")}>
                <BusIcon size={15} color="#7c3aed" />
                <span>Manage Routes & Buses</span>
              </button>
              <button className="action-btn" onClick={() => navigate("students")}>
                <UsersIcon size={15} color="#16a34a" />
                <span>View Student List</span>
              </button>
              <button className="action-btn" onClick={() => navigate("reports")}>
                <FileTextIcon size={15} color="#0d9488" />
                <span>Generate Report</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, bg, label, value, sub, subColor }: any) {
  return (
    <div className="stat-card">
      <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
        {icon}
      </div>
      <div>
        <div className="text-xs" style={{ color: "var(--text-secondary)" }}>{label}</div>
        <div className="text-xl font-bold leading-tight" style={{ color: "var(--text)" }}>{value}</div>
        <div className="text-xs font-medium" style={{ color: subColor }}>{sub}</div>
      </div>
    </div>
  );
}

function UserXIcon({ size = 16, color }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <line x1="18" y1="8" x2="23" y2="13" /><line x1="23" y1="8" x2="18" y2="13" />
    </svg>
  );
}

function ClockDelayIcon({ size = 16, color }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 8 14" />
    </svg>
  );
}
