# MAS - Multi-Agent System for Heavy Refactoring Workloads

## Classification
- **DE**: Effizientes Tool
- **EN**: Efficient Tool
- **Status**: Active (`active`)

## Overview & Background
MAS ist ein maßgeschneidertes Terminal-geführtes Multi-Agenten-Framework, das entwickelt wurde, um vielschichtige Repository-Umbauten und Refactorings auszuführen. Das System ermöglicht die vollständige Kontrolle über den Kontextgraph und nutzt wahlweise On-Demand RunPod Cloud-GPUs oder lokale LLM-Instanzen (vLLM), um kostenintensive externe API-Abhängigkeiten zu vermeiden.

## Personal Contribution
- Architektur und Entwicklung des gesamten Agenten-Orchestrators.
- CLI-Terminal-Interface zur Ticketerstellung und Datei-Kontextanalyse.
- Integration von Docker-Container-Isolation für sichere Worker-Bot-Ausführungen.

## Verified Tech Stack (Brand Logos Only)
- **Python**
- **Docker**
- **FastAPI**
- **PostgreSQL**
- **AI Agent**

## Detailed Milestones / Roadmap
1. **Meilenstein 1: CLI & Agent Core Loop** (Abgeschlossen)
   - Terminal-Client, lokaler Datei-Parser & autonome Agenten-Werkzeugschleife.
2. **Meilenstein 2: Cloud GPU Compute Offloading** (In Arbeit)
   - Dynamisches Starten günstiger RunPod GPU-Worker für schwere Refactoring-Passes.
3. **Meilenstein 3: Local vLLM Inference Pooling** (Geplant)
   - Lokale vLLM-Pooling-Integration für absolut kostenfreie Offline-Coding-Sessions.
