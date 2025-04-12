"use client"

import React, { useState } from 'react';
import { 
  Settings, 
  Server, 
  Cloud, 
  Lock, 
  Globe, 
  Database, 
  Shield, 
  Key, 
  RefreshCw, 
  AlertTriangle, 
  Check,
  UserPlus,
  GitBranch,
  Layers,
  Cpu,
  CheckCircle,
  Network
} from 'lucide-react';

import { 
  DashboardLayout, 
  DashboardSection 
} from '../components/ui/layout-components';
import { 
  FormField, 
  FormGroup, 
  ToggleSwitch 
} from '../components/ui/form-components';
import { Button, ButtonGroup } from '../components/ui/button-components';
import { ResourceCard } from '../components/ui/common-components';

// Platform Configuration Page
const PlatformConfigPage = () => {
  // State for various configuration sections
  const [generalSettings, setGeneralSettings] = useState({
    platformName: 'OmniCloud Platform',
    defaultRegion: 'us-east-1',
    multiRegionEnabled: false
  });

  const [securitySettings, setSecuritySettings] = useState({
    defaultEncryption: true,
    multiFactorAuth: true,
    autoRotateCredentials: true,
    cloudTrailLogging: true,
    securityHubEnabled: true
  });

  const [networkSettings, setNetworkSettings] = useState({
    defaultVPCCIDR: '10.0.0.0/16',
    enableTransitGateway: false,
    defaultSubnetMask: '255.255.255.0',
    internetGatewayEnabled: true
  });

  const [complianceSettings, setComplianceSettings] = useState({
    defaultComplianceStandards: [
      'PCI DSS',
      'HIPAA',
      'SOC 2'
    ],
    automatedComplianceScans: true,
    complianceScanFrequency: 'daily'
  });

  const [resourceDefaults, setResourceDefaults] = useState({
    defaultInstanceType: 't3.medium',
    defaultStorageType: 'gp3',
    defaultDatabaseEngine: 'aurora-mysql',
    defaultContainerOrchestration: 'EKS'
  });

  const [accessManagement, setAccessManagement] = useState({
    defaultIAMPolicyType: 'least-privilege',
    ssoEnabled: true,
    maxSessionDuration: '1h',
    roleSessionTimeout: '12h'
  });

  // Handlers for updating settings
  const updateGeneralSettings = (key, value) => {
    setGeneralSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const updateSecuritySettings = (key, value) => {
    setSecuritySettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // Save configuration handler
  const handleSaveConfiguration = () => {
    // In a real application, this would send the configuration to a backend
    console.log('Saving platform configuration', {
      generalSettings,
      securitySettings,
      networkSettings,
      complianceSettings,
      resourceDefaults,
      accessManagement
    });
    // Optionally show a success notification
  };

  return (
    <DashboardLayout
      title="Platform Configuration"
      actionLabel="Save Changes"
      onAction={handleSaveConfiguration}
    >
      <div className="space-y-6">
        {/* General Platform Settings */}
        <DashboardSection 
          title="General Platform Settings" 
          icon={<Settings className="text-blue-400" />}
        >
          <FormGroup columns={2}>
            <FormField 
              label="Platform Name"
              id="platformName"
              value={generalSettings.platformName}
              onChange={(e) => updateGeneralSettings('platformName', e.target.value)}
            />
            <FormField 
              label="Default Region"
              id="defaultRegion"
              type="select"
              value={generalSettings.defaultRegion}
              onChange={(e) => updateGeneralSettings('defaultRegion', e.target.value)}
              options={[
                { value: 'us-east-1', label: 'US East (N. Virginia)' },
                { value: 'us-west-2', label: 'US West (Oregon)' },
                { value: 'eu-west-1', label: 'EU (Ireland)' },
                { value: 'ap-southeast-1', label: 'Asia Pacific (Singapore)' }
              ]}
            />
            <ToggleSwitch 
              label="Multi-Region Support"
              description="Enable resources to span multiple regions"
              isOn={generalSettings.multiRegionEnabled}
              onToggle={() => updateGeneralSettings('multiRegionEnabled', !generalSettings.multiRegionEnabled)}
            />
          </FormGroup>
        </DashboardSection>

        {/* Security Configuration */}
        <DashboardSection 
          title="Security Configuration" 
          icon={<Shield className="text-red-400" />}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-medium mb-4">Security Defaults</h4>
              <div className="space-y-4">
                <ToggleSwitch 
                  label="Default Encryption"
                  description="Encrypt all new resources by default"
                  isOn={securitySettings.defaultEncryption}
                  onToggle={() => updateSecuritySettings('defaultEncryption', !securitySettings.defaultEncryption)}
                />
                <ToggleSwitch 
                  label="Multi-Factor Authentication"
                  description="Require MFA for all user accounts"
                  isOn={securitySettings.multiFactorAuth}
                  onToggle={() => updateSecuritySettings('multiFactorAuth', !securitySettings.multiFactorAuth)}
                />
                <ToggleSwitch 
                  label="Auto Credential Rotation"
                  description="Automatically rotate access credentials"
                  isOn={securitySettings.autoRotateCredentials}
                  onToggle={() => updateSecuritySettings('autoRotateCredentials', !securitySettings.autoRotateCredentials)}
                />
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Logging & Monitoring</h4>
              <div className="space-y-4">
                <ToggleSwitch 
                  label="CloudTrail Logging"
                  description="Enable comprehensive API logging"
                  isOn={securitySettings.cloudTrailLogging}
                  onToggle={() => updateSecuritySettings('cloudTrailLogging', !securitySettings.cloudTrailLogging)}
                />
                <ToggleSwitch 
                  label="Security Hub"
                  description="Enable centralized security monitoring"
                  isOn={securitySettings.securityHubEnabled}
                  onToggle={() => updateSecuritySettings('securityHubEnabled', !securitySettings.securityHubEnabled)}
                />
              </div>
            </div>
          </div>
        </DashboardSection>

        {/* Network Configuration */}
        <DashboardSection 
          title="Network Configuration" 
          icon={<Network className="text-green-400" />}
        >
          <FormGroup columns={2}>
            <FormField 
              label="Default VPC CIDR"
              id="defaultVPCCIDR"
              value={networkSettings.defaultVPCCIDR}
              onChange={(e) => setNetworkSettings(prev => ({
                ...prev, 
                defaultVPCCIDR: e.target.value
              }))}
            />
            <FormField 
              label="Default Subnet Mask"
              id="defaultSubnetMask"
              value={networkSettings.defaultSubnetMask}
              onChange={(e) => setNetworkSettings(prev => ({
                ...prev, 
                defaultSubnetMask: e.target.value
              }))}
            />
            <ToggleSwitch 
              label="Transit Gateway"
              description="Enable cross-VPC connectivity"
              isOn={networkSettings.enableTransitGateway}
              onToggle={() => setNetworkSettings(prev => ({
                ...prev, 
                enableTransitGateway: !prev.enableTransitGateway
              }))}
            />
            <ToggleSwitch 
              label="Internet Gateway"
              description="Allow internet access for VPCs"
              isOn={networkSettings.internetGatewayEnabled}
              onToggle={() => setNetworkSettings(prev => ({
                ...prev, 
                internetGatewayEnabled: !prev.internetGatewayEnabled
              }))}
            />
          </FormGroup>
        </DashboardSection>

        {/* Compliance Configuration */}
        <DashboardSection 
          title="Compliance Configuration" 
          icon={<CheckCircle className="text-purple-400" />}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-medium mb-4">Compliance Standards</h4>
              <FormField 
                label="Default Compliance Standards"
                id="complianceStandards"
                type="select"
                value={complianceSettings.defaultComplianceStandards[0]}
                onChange={(e) => setComplianceSettings(prev => ({
                  ...prev,
                  defaultComplianceStandards: [e.target.value]
                }))}
                options={[
                  { value: 'PCI DSS', label: 'PCI DSS' },
                  { value: 'HIPAA', label: 'HIPAA' },
                  { value: 'SOC 2', label: 'SOC 2' },
                  { value: 'NIST 800-53', label: 'NIST 800-53' }
                ]}
                multiple
              />
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Automated Compliance</h4>
              <ToggleSwitch 
                label="Automated Compliance Scans"
                description="Run automated compliance checks"
                isOn={complianceSettings.automatedComplianceScans}
                onToggle={() => setComplianceSettings(prev => ({
                  ...prev,
                  automatedComplianceScans: !prev.automatedComplianceScans
                }))}
              />
              <FormField 
                label="Scan Frequency"
                id="complianceScanFrequency"
                type="select"
                value={complianceSettings.complianceScanFrequency}
                onChange={(e) => setComplianceSettings(prev => ({
                  ...prev,
                  complianceScanFrequency: e.target.value
                }))}
                options={[
                  { value: 'hourly', label: 'Hourly' },
                  { value: 'daily', label: 'Daily' },
                  { value: 'weekly', label: 'Weekly' },
                  { value: 'monthly', label: 'Monthly' }
                ]}
              />
            </div>
          </div>
        </DashboardSection>

        {/* Resource Defaults */}
        <DashboardSection 
          title="Resource Defaults" 
          icon={<Server className="text-cyan-400" />}
        >
          <FormGroup columns={2}>
            <FormField 
              label="Default Instance Type"
              id="defaultInstanceType"
              type="select"
              value={resourceDefaults.defaultInstanceType}
              onChange={(e) => setResourceDefaults(prev => ({
                ...prev,
                defaultInstanceType: e.target.value
              }))}
              options={[
                { value: 't3.micro', label: 't3.micro' },
                { value: 't3.small', label: 't3.small' },
                { value: 't3.medium', label: 't3.medium' },
                { value: 'm5.large', label: 'm5.large' }
              ]}
            />
            <FormField 
              label="Default Storage Type"
              id="defaultStorageType"
              type="select"
              value={resourceDefaults.defaultStorageType}
              onChange={(e) => setResourceDefaults(prev => ({
                ...prev,
                defaultStorageType: e.target.value
              }))}
              options={[
                { value: 'gp2', label: 'General Purpose SSD (GP2)' },
                { value: 'gp3', label: 'General Purpose SSD (GP3)' },
                { value: 'io1', label: 'Provisioned IOPS SSD' }
              ]}
            />
            <FormField 
              label="Default Database Engine"
              id="defaultDatabaseEngine"
              type="select"
              value={resourceDefaults.defaultDatabaseEngine}
              onChange={(e) => setResourceDefaults(prev => ({
                ...prev,
                defaultDatabaseEngine: e.target.value
              }))}
              options={[
                { value: 'mysql', label: 'MySQL' },
                { value: 'postgres', label: 'PostgreSQL' },
                { value: 'aurora-mysql', label: 'Aurora MySQL' },
                { value: 'aurora-postgres', label: 'Aurora PostgreSQL' }
              ]}
            />
            <FormField 
              label="Default Container Orchestration"
              id="defaultContainerOrchestration"
              type="select"
              value={resourceDefaults.defaultContainerOrchestration}
              onChange={(e) => setResourceDefaults(prev => ({
                ...prev,
                defaultContainerOrchestration: e.target.value
              }))}
              options={[
                { value: 'EKS', label: 'Amazon EKS' },
                { value: 'ECS', label: 'Amazon ECS' },
                { value: 'Fargate', label: 'AWS Fargate' }
              ]}
            />
          </FormGroup>
        </DashboardSection>

        {/* Access Management */}
        <DashboardSection 
          title="Access Management" 
          icon={<Key className="text-orange-400" />}
        >
          <FormGroup columns={2}>
            <FormField 
              label="Default IAM Policy Type"
              id="defaultIAMPolicyType"
              type="select"
              value={accessManagement.defaultIAMPolicyType}
              onChange={(e) => setAccessManagement(prev => ({
                ...prev,
                defaultIAMPolicyType: e.target.value
              }))}
              options={[
                { value: 'least-privilege', label: 'Least Privilege' },
                { value: 'role-based', label: 'Role-Based Access' },
                { value: 'attribute-based', label: 'Attribute-Based Access' }
              ]}
            />
            <ToggleSwitch 
              label="Single Sign-On (SSO)"
              description="Enable centralized access management"
              isOn={accessManagement.ssoEnabled}
              onToggle={() => setAccessManagement(prev => ({
                ...prev,
                ssoEnabled: !prev.ssoEnabled
              }))}
            />
            <FormField 
              label="Max Session Duration"
              id="maxSessionDuration"
              type="select"
              value={accessManagement.maxSessionDuration}
              onChange={(e) => setAccessManagement(prev => ({
                ...prev,
                maxSessionDuration: e.targetvalue
            }))}
            options={[
              { value: '1h', label: '1 Hour' },
              { value: '4h', label: '4 Hours' },
              { value: '8h', label: '8 Hours' },
              { value: '12h', label: '12 Hours' }
            ]}
          />
          <FormField 
            label="Role Session Timeout"
            id="roleSessionTimeout"
            type="select"
            value={accessManagement.roleSessionTimeout}
            onChange={(e) => setAccessManagement(prev => ({
              ...prev,
              roleSessionTimeout: e.target.value
            }))}
            options={[
              { value: '1h', label: '1 Hour' },
              { value: '6h', label: '6 Hours' },
              { value: '12h', label: '12 Hours' },
              { value: '24h', label: '24 Hours' }
            ]}
          />
        </FormGroup>
      </DashboardSection>

      {/* Action Summary */}
      <DashboardSection 
        title="Configuration Summary" 
        icon={<CheckCircle className="text-green-400" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ResourceCard 
            title="General Settings" 
            value={generalSettings.platformName}
            icon={Settings}
            color="bg-blue-500/10 text-blue-400"
            subtitle={`Default Region: ${generalSettings.defaultRegion}`}
          />
          <ResourceCard 
            title="Security Posture" 
            value={securitySettings.defaultEncryption ? 'Enhanced' : 'Standard'}
            icon={Shield}
            color="bg-red-500/10 text-red-400"
            subtitle={`MFA: ${securitySettings.multiFactorAuth ? 'Enabled' : 'Disabled'}`}
          />
          <ResourceCard 
            title="Compliance Status" 
            value={complianceSettings.automatedComplianceScans ? 'Active' : 'Inactive'}
            icon={CheckCircle}
            color="bg-green-500/10 text-green-400"
            subtitle={`Scan Frequency: ${complianceSettings.complianceScanFrequency}`}
          />
        </div>
      </DashboardSection>

      {/* Advanced Configuration Options */}
      <DashboardSection 
        title="Advanced Configuration" 
        icon={<Cpu className="text-purple-400" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-white font-medium mb-4">System Integrations</h4>
            <div className="space-y-4">
              <ToggleSwitch 
                label="External Identity Provider"
                description="Connect to external identity management system"
                isOn={false}
                onToggle={() => {}}
              />
              <ToggleSwitch 
                label="SIEM Integration"
                description="Connect to Security Information and Event Management"
                isOn={false}
                onToggle={() => {}}
              />
              <ToggleSwitch 
                label="Cloud Cost Management"
                description="Enable integrated cost tracking"
                isOn={false}
                onToggle={() => {}}
              />
            </div>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">System Limits</h4>
            <FormGroup columns={1}>
              <FormField 
                label="Max Concurrent Deployments"
                id="maxConcurrentDeployments"
                type="number"
                value={10}
                onChange={() => {}}
                min={1}
                max={100}
              />
              <FormField 
                label="Global Resource Quota"
                id="globalResourceQuota"
                type="number"
                value={500}
                onChange={() => {}}
                min={100}
                max={1000}
              />
            </FormGroup>
          </div>
        </div>
      </DashboardSection>

      {/* Backup and Recovery */}
      <DashboardSection 
        title="Backup & Recovery" 
        icon={<GitBranch className="text-cyan-400" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-white font-medium mb-4">Backup Strategy</h4>
            <div className="space-y-4">
              <ToggleSwitch 
                label="Automated Backups"
                description="Enable automatic system backups"
                isOn={true}
                onToggle={() => {}}
              />
              <FormField 
                label="Backup Frequency"
                id="backupFrequency"
                type="select"
                value="daily"
                onChange={() => {}}
                options={[
                  { value: 'hourly', label: 'Hourly' },
                  { value: 'daily', label: 'Daily' },
                  { value: 'weekly', label: 'Weekly' }
                ]}
              />
              <FormField 
                label="Backup Retention"
                id="backupRetention"
                type="select"
                value="30d"
                onChange={() => {}}
                options={[
                  { value: '7d', label: '7 Days' },
                  { value: '30d', label: '30 Days' },
                  { value: '90d', label: '90 Days' }
                ]}
              />
            </div>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Disaster Recovery</h4>
            <div className="space-y-4">
              <ToggleSwitch 
                label="Multi-Region Failover"
                description="Enable cross-region disaster recovery"
                isOn={false}
                onToggle={() => {}}
              />
              <FormField 
                label="Recovery Point Objective"
                id="rpo"
                type="select"
                value="1h"
                onChange={() => {}}
                options={[
                  { value: '15m', label: '15 Minutes' },
                  { value: '1h', label: '1 Hour' },
                  { value: '4h', label: '4 Hours' }
                ]}
              />
              <FormField 
                label="Recovery Time Objective"
                id="rto"
                type="select"
                value="4h"
                onChange={() => {}}
                options={[
                  { value: '1h', label: '1 Hour' },
                  { value: '4h', label: '4 Hours' },
                  { value: '8h', label: '8 Hours' }
                ]}
              />
            </div>
          </div>
        </div>
      </DashboardSection>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 mt-6">
        <Button variant="secondary">
          Cancel
        </Button>
        <Button 
          variant="primary" 
          onClick={handleSaveConfiguration}
        >
          Save Platform Configuration
        </Button>
      </div>
    </div>
  </DashboardLayout>
);
};

export default PlatformConfigPage;