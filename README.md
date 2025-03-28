# Job Portal with AI-Powered Job Recommendations

## 🚀 Overview
The **Job Portal** is an AI-driven platform designed to help users find the most suitable job opportunities based on their skills and assessment performance. Users complete assessments, and our **Random Forest** model processes their results to generate personalized job recommendations. The platform offers a seamless experience with a modern UI and efficient backend integration.

## 🛠 Technology Stack
- **Frontend**: Next.js, ShadCN, Tailwind CSS
- **Backend**: Python, Prisma, MongoDB
- **Machine Learning**: Random Forest for job recommendations

## 📌 Key Features
- **AI-Powered Job Matching**: Personalized recommendations based on assessment results.
- **User-Friendly Assessments**: Intuitive interface for skill evaluation.
- **Efficient Database Management**: Prisma ORM with MongoDB for scalability.
- **Modern UI/UX**: Built using ShadCN and Tailwind CSS for a sleek and responsive design.
- **Secure and Scalable Architecture**: Ensures a smooth and reliable user experience.

## 🏗️ Installation and Setup

### Prerequisites
Ensure you have the following installed on your system:
- Node.js & npm
- Python 3
- MongoDB

### Installation Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/anshhvarma/job-portal.git
   cd job-portal
   ```
2. **Install Frontend Dependencies**
   ```bash
   npm install
   ```
3. **Install Backend Dependencies**
   ```bash
   pip install -r requirements.txt
   ```
4. **Set Up the Database**
   ```bash
   prisma migrate dev
   ```
5. **Run the Application**
   ```bash
   npm run dev  # Start frontend
   python backend.py  # Start backend
   ```

## 🤖 AI-Powered Job Recommendation System
- The **Random Forest** algorithm is used to analyze user assessment scores and match them with the most suitable job opportunities.
- The model is trained on an extensive dataset of job roles and skills to provide accurate recommendations.
- Ensures data-driven and unbiased job recommendations to enhance career growth.

## 🤝 Contribution Guidelines
We welcome contributions to enhance the functionality of the platform. If you'd like to contribute:
1. Fork the repository.
2. Create a new branch (`feature-branch-name`).
3. Make your modifications and commit changes.
4. Open a pull request with a clear description of the update.



