# SMART - System Monitoring, Analysis & Resource Tracking

## Classification
- **DE**: Kollaboratives Uni-Projekt
- **EN**: Collaborative University Project
- **Status**: Side-Quest (`side-quest`)

## Overview & Background
SMART ist eine im Rahmen des Informatikstudiums entstandene, kollaborative Systemtelemetrie-Suite in Go & TypeScript. Die Anwendung dient der Echtzeit-Überwachung von Linux-Kernel-Metriken, RAM-Allokationen, CPU-Lasten und systemd-Daemons mit minimalem CPU-Overhead.

## Personal Contribution
- **Teamentwicklung**: Arbeit im universitären Entwicklerteam.
- **Persönliche Modul-Beiträge**: Entwicklung der AWS-Cloud-Schnittstelle, Docker-Containerisierung der Telemetrie-Sammeldienste und Integration der Model Context Protocol (MCP) KI-Analyse-Schnittstelle.
- *(Anmerkung: Im Gesamtprojekt genutzte Technologien anderer Teammitglieder wie Redis wurden nicht persönlich betreut und daher nicht in den persönlichen Skill-Stack übernommen).*

## Verified Tech Stack (Brand Logos Only)
- **Go**
- **TypeScript**
- **Docker**
- **AWS**
- **AI Agent**

## Detailed University Sprints
1. **Sprint 1: Architecture & Go Metrics Collector Daemon** (Abgeschlossen)
   - Konzeption des Kernelsystems, Implementierung des Go-Sammel-Daemons und systemd-Integration.
2. **Sprint 2: Terminal HUD Display & Log Formatter** (Abgeschlossen)
   - CLI/Terminal-HUD, Auswertung von `/proc`-Dateien und Log-Formatting.
3. **Sprint 3: Dockerization & AWS Cloud Telemetry Gateway** (In Arbeit)
   - Containerisierung mit Docker, Anbindung an AWS Cloud Services und MCP-Protokoll-Anbindung.
4. **Sprint 4: Multi-Node gRPC Aggregation & Final Evaluation** (Geplant)
   - gRPC-basierte Telemetrie-Aggregation über mehrere verteilte Linux-Knoten und wissenschaftliche Auswertung.
