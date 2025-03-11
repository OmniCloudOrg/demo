import React from 'react';
import { Cloud } from 'lucide-react';
import NavSection from '../navigation/NavSection';
import StatusIndicator from '../navigation/StatusIndicator';
import { navSections } from '../../utils/navigation';
import { SystemStatus } from '../../types';

interface SidebarProps {
  activeSection: string;
  openSubmenus: Record<string, boolean>;
  onNavigate: (id: string) => void;
  onToggleSubmenu: (id: string) => void;
  systemStatus: SystemStatus;
}

/**
 * Sidebar navigation component
 */
const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  openSubmenus,
  onNavigate,
  onToggleSubmenu,
  systemStatus
}) => {
  return (
    <div className="hidden lg:block w-72 border-r border-slate-800 overflow-y-auto overflow-x-hidden">
      {/* Sticky OmniCloud Card */}
      <div className="sticky top-0 z-10 bg-slate-900 border-b border-slate-800">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-500/10">
              <Cloud className="text-blue-400" size={28} />
            </div>
            <div>
              <h1 className="text-lg font-bold">OmniCloud</h1>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <StatusIndicator status={systemStatus} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Sections */}
      <div className="p-4 h-[calc(100vh-88px)] space-y-4">
        {navSections.map((section, idx) => (
          <NavSection
            key={idx}
            title={section.title}
            items={section.items}
            activeSection={activeSection}
            openSubmenus={openSubmenus}
            onNavigate={onNavigate}
            onToggleSubmenu={onToggleSubmenu}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;