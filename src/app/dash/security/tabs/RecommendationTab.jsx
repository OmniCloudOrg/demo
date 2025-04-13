"use client"

import React from 'react';
import { 
  Shield, BarChart2, Layers, AlertTriangle, Code
} from 'lucide-react';

import { Card } from '../../components/ui/card-components';
import { ResourceCard } from '../ui-components';

export const RecommendationTab = (props) => {
  return (
    <div className="space-y-6">
      {/* Best Practice Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ResourceCard 
          title="Security Recommendations" 
          value="18" 
          icon={Shield} 
          color="bg-red-500/10 text-red-400" 
          subtitle="High impact findings"
          clickable
        />
        <ResourceCard 
          title="Cost Optimization" 
          value="8" 
          icon={BarChart2} 
          color="bg-green-500/10 text-green-400" 
          subtitle="Potential savings"
          clickable
        />
        <ResourceCard 
          title="CloudFormation Best Practices" 
          value="12" 
          icon={Layers} 
          color="bg-blue-500/10 text-blue-400" 
          subtitle="Template improvements"
          clickable
        />
      </div>
      
      {/* Security Recommendations */}
      <Card title="High Impact Security Recommendations" action={
        <button className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-2">
          <Filter size={14} />
          Filter
        </button>
      }>
        <div className="space-y-3">
          {[
            {
              title: 'Enable S3 Default Encryption for All Buckets',
              description: 'S3 buckets without default encryption pose a data protection risk. All buckets should have encryption enabled.',
              impact: 'High',
              effort: 'Low',
              affectedResources: 3
            },
            {
              title: 'Remove Public Access from RDS Instances',
              description: 'Production databases with public accessibility increase attack surface. Use private subnets and VPC endpoints instead.',
              impact: 'Critical',
              effort: 'Medium',
              affectedResources: 1
            },
            {
              title: 'Implement Least Privilege IAM Policies',
              description: 'Several IAM roles have overly permissive policies. Apply least privilege principles to reduce the risk of privilege escalation.',
              impact: 'High',
              effort: 'High',
              affectedResources: 4
            }
          ].map((rec, idx) => (
            <div key={idx} className="bg-slate-800/40 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-red-500/10 text-red-400 mt-1">
                  <AlertTriangle size={16} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-white font-medium">{rec.title}</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                        {rec.impact} Impact
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {rec.effort} Effort
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300 mb-2">{rec.description}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">{rec.affectedResources} affected resources</span>
                    <button className="text-blue-400 hover:text-blue-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="text-center">
            <button className="text-blue-400 hover:text-blue-300 text-sm">
              View All 18 Security Recommendations
            </button>
          </div>
        </div>
      </Card>
      
      {/* CloudFormation Best Practices */}
      <Card title="CloudFormation Template Improvements" action={
        <button className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-2">
          <Download size={14} />
          Export Report
        </button>
      }>
        <div className="space-y-3">
          {[
            {
              title: 'Add Description Parameters to All Templates',
              description: 'Templates missing proper descriptions make management difficult. Add detailed descriptions to all templates and resources.',
              impact: 'Low',
              effort: 'Low',
              affectedResources: 5
            },
            {
              title: 'Use !Ref Instead of Hardcoded Values',
              description: 'Several templates have hardcoded values that should be parameterized for better reusability and maintenance.',
              impact: 'Medium',
              effort: 'Medium',
              affectedResources: 8
            },
            {
              title: 'Implement cfn-lint in CI/CD Pipeline',
              description: 'Set up automated template validation with cfn-lint to catch errors and best practice violations before deployment.',
              impact: 'Medium',
              effort: 'Low',
              affectedResources: 'All stacks'
            }
          ].map((rec, idx) => (
            <div key={idx} className="bg-slate-800/40 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-blue-500/10 text-blue-400 mt-1">
                  <Code size={16} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-white font-medium">{rec.title}</h4>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        rec.impact === 'Low' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                        rec.impact === 'Medium' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                        'bg-red-500/10 text-red-400 border border-red-500/20'
                      }`}>
                        {rec.impact} Impact
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {rec.effort} Effort
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300 mb-2">{rec.description}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Affects: {rec.affectedResources}</span>
                    <button className="text-blue-400 hover:text-blue-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="text-center">
            <button className="text-blue-400 hover:text-blue-300 text-sm">
              View All Template Recommendations
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

// Missing components
const Filter = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
    </svg>
  );
};

const Download = ({ size, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  );
};