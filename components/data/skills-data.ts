export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  command: string;
  skills: Skill[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Sistemas Operativos",
    command: "ls /os/",
    skills: [
      { name: "Debian", level: 95 },
      { name: "RHEL", level: 85 },
      { name: "Windows Server", level: 75 }
    ],
  },
  {
    title: "Virtualizacion & Cloud",
    command: "ls /virtualization/",
    skills: [
      { name: "VMware vSphere", level: 85 },
      { name: "Hyper-V", level: 70 },
      { name: "Docker", level: 65 },
    ],
  },
  {
    title: "Monitorizacion & SIEM",
    command: "ls /monitoring/",
    skills: [
      { name: "SIEM (QRadar/Splunk)", level: 80 },
      { name: "Nagios / Zabbix", level: 85 },
      { name: "Grafana", level: 80 },
    ],
  },
  {
    title: "Networking & Seguridad",
    command: "ls /network/",
    skills: [
      { name: "DNS / DHCP", level: 85 },
      { name: "Firewalls (iptables)", level: 75 },
      { name: "Active Directory", level: 85 },
    ],
  },
  {
    title: "Herramientas & Metodologias",
    command: "ls /tools/",
    skills: [
      { name: "ServiceNow / Ticketing", level: 90 },
      { name: "ITIL Framework", level: 80 },
      { name: "Bash Scripting", level: 75 },
    ],
  },
  {
    title: "Seguridad Ofensiva/Defensiva",
    command: "ls /security/",
    skills: [
      { name: "MITRE ATT&CK", level: 75 },
      { name: "Incident Response", level: 80 },
      { name: "Log Analysis", level: 85 },
    ],
  },
]

export const ADDITIONAL_SKILLS = [
  "PowerShell", "Python", "Ansible", "Terraform", "Git",
  "CI/CD", "AWS Basics", "Backup & Recovery", "Disaster Recovery",
  "Patch Management", "Vulnerability Assessment", "SSL/TLS",
  "TCP/IP", "VPN", "Load Balancing", "Storage (SAN/NAS)",
  "Documentacion Tecnica", "Trabajo en Equipo", "Resolucion de Problemas",
  "Comunicacion Efectiva",
]

