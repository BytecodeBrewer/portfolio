# ARGUS - Market Analytics & Financial Telemetry Pipeline

## Classification
- **DE**: Kollaboratives Lernprojekt
- **EN**: Collaborative Learning Project
- **Status**: Active (`active`)

## Overview & Background
ARGUS ist ein kollaboratives Finanzdaten- und Analyse-Tool, das entwickelt wurde, um Devisen- und Marktdaten ohne teure proprietäre Enterprise-Terminals zu erfassen, zu validieren und auszuwerten. Das Projekt dient als Lern- und Entwicklungsplattform für automatisierte Handelsstrategien, Backtesting und Volatilitätsanalysen.

## Personal Contribution
- Implementierung der vektorisieren Pandas-Analysemodule zur Berechnung gleitender Durchschnitte und Varianzspitzen.
- Entwurf der Pydantic-Schema-Validierung für eingehende API-Streams (ExchangeRate API & yfinance).
- Konzeption der modularen Pipeline-Architektur und Anomaly-Alerting-Logik.

## Verified Tech Stack (Brand Logos Only)
- **Python**
- **Django**
- **FastAPI**
- **PostgreSQL**

*(Bibliotheken wie Pandas, Pydantic, NumPy, yfinance und Pytest sind im Quellcode im Einsatz, besitzen jedoch kein eigenes Marken-Logo und werden gemäß Design-Vorgabe nicht als eigenständige Logos gerendert.)*

## Detailed Sprint Roadmap
1. **Sprint 1: Architecture & Ingestion Core** (Abgeschlossen)
   - Modulare Pipeline-Architektur, Live-FX-Umrechnung, Tkinter Test-Harness und Pytest-Suite.
2. **Sprint 2: Historical Ingestion & Analytics Engine** (In Arbeit)
   - yfinance Markt-Ingestion, rollierende Volatilitätsmetriken und pandas-Vektorisierung.
3. **Sprint 3: Database Storage & Automated Schedules** (Geplant)
   - Persistente PostgreSQL-Datenbank, automatisierte Batch-Schedules und Discord Alert Webhooks.
4. **Sprint 4: Strategy Backtesting & Simulation Engine** (Geplant)
   - Backtesting-Modul zur Simulation historischer Handelsstrategien, Drawdown-Berechnungen und Risiko-Scoring.
5. **Sprint 5: Paper Trading Sandbox & Live Telemetry** (Geplant)
   - Paper-Trading-Umgebung zur risiko-freien Live-Testung entwickelter Strategien mit Echtzeit-Telemetrie.
