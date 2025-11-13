# ERP / E-Commerce Integration Dashboard

A full-stack demonstration project that integrates a mock B2C e-commerce store with a mock ERP system (similar to NetSuite).  
This application showcases frontend + backend engineering, templating, API integrations (REST & SOAP/XML), and CI/CD — all skills commonly required in real-world software engineering roles.

---

## 🚀 Features

- Displays customer orders in a clean dashboard UI
- Syncs orders to a mock ERP using:
  - **REST JSON API**
  - **SOAP-style XML envelope**
- Server-side rendering using **Handlebars**
- Modern frontend using **HTML, CSS, JavaScript**
- Mock endpoints simulating:
  - B2C e-commerce order service
  - ERP system integration
- Fully functional CI pipeline using **GitHub Actions**
- Clean git workflow with **.gitignore**, organized project structure, and documentation

---

## 🧠 Technology Stack

### **Frontend**
- **HTML5**
- **CSS3**
- **Vanilla JavaScript**
- Dynamic UI elements (sync buttons, alerts)
- Clean light interface inspired by admin dashboards

### **Backend**
- **Node.js + Express**
- API routing & controllers
- Handlebars server-side rendering
- XML generation for SOAP calls
- Mock ERP + E-commerce microservices

### **Templating**
- **Handlebars (HBS)**  
Used for:
- Order list rendering  
- Order detail pages  
- Layout templates  

### **Data Formats**
- **JSON** (REST APIs)
- **XML** (SOAP-style ERP requests)

### **API Integration**
- Fully mocked integration:
  - `/api/shop/orders` — B2C storefront order feed
  - `/api/erp/sync-order/:id` — ERP sync endpoint (REST)
  - SOAP XML envelope sent to ERP mock

### **DevOps / CI-CD**
- **GitHub Actions** workflow:
  - Installs Node
  - Installs dependencies
  - Runs lint + test scripts
  - Validates every push/pull request

### **Version Control**
- **Git**
- **GitHub repository**
- Clean commit history and branching structure

---

## 📝 Job Requirements Checklist

This project intentionally demonstrates the exact skills many companies look for:

### ✔ Familiarity with:
| Job Requirement | Demonstrated In Project |
|-----------------|------------------------|
| **JavaScript** | Frontend + backend logic |
| **JSON** | REST API responses + fetch requests |
| **HTML/CSS** | Dashboard UI |
| **Templating Tools** | Handlebars (HBS) |
| **API Integration (REST/SOAP)** | `/api/shop` + `/api/erp` + XML SOAP envelope |
| **ERP (NetSuite-like)** | Mock ERP sync endpoint |
| **B2C E-Commerce** | Mock orders API simulating storefront |
| **CI/CD concepts** | GitHub Actions pipeline |
| **XML** | SOAP request body |

### ✔ Preferred Experience:
| Requirement | Demonstrated In Project |
|------------|--------------------------|
| **GIT Version Control** | Repo uses git, .gitignore, commits |
| **GitHub** | Project hosted on GitHub with Actions |
| **Documentation Tools** | README.md + sample JIRA story + architecture notes |

This README helps hiring managers instantly match your project to job requirements.

---

## 🏗 Project Structure

