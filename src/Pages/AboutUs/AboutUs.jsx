import { FaFacebook, FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";

const AboutUs = () => {
    return (
        <div className="max-w-4xl mt-15 mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-center mb-6 text-primary">
                About the Developer
            </h1>

            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                {/* Developer Info */}
                <h2 className="text-2xl text-gray-900 dark:text-white font-semibold mb-2">
                    👨‍💻 Topan Roy
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                    I am a passionate MERN Stack Developer from Dinajpur, Bangladesh. 
                    I enjoy building dynamic and responsive web applications with modern tools and technologies.
                </p>

                {/* Projects Info */}
                <h3 className="text-xl text-gray-900 dark:text-white font-semibold mt-6 mb-2">
                    💼 Projects Completed: 5+
                </h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    {[
                        {
                            emoji: "🎓",
                            title: "Online Group Study Assignment System (This Project)",
                            link: "https://online-group-study-f26a8.web.app/",
                        },
                        {
                            emoji: "🌐",
                            title: "Tourism Management System",
                            link: "https://tourism-management-syste-e2926.web.app/",
                        },
                        {
                            emoji: "📦",
                            title: "Subscription Box Platform",
                            link: "https://subscription-box-1.web.app/",
                        },
                        {
                            emoji: "🌿",
                            title: "Plant Care Tracker App",
                            link: "https://plant-care-tracker-3a085.web.app/",
                        },
                        {
                            emoji: "🩺",
                            title: "docTalk",
                            link: "https://terrible-fuel.surge.sh/",
                        },
                    ].map((project, index) => (
                        <li key={index}>
                            {project.emoji}{" "}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                            >
                                {project.title}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Other Links */}
                <div className="mt-6">
                    <h3 className="text-xl text-gray-900 dark:text-white font-semibold mb-2">
                        🔗 Other Links
                    </h3>
                    <div className="flex flex-col gap-2">
                        <a
                            href="https://github.com/Topan-Roy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                            <FaGithub className="mr-2" /> GitHub Profile
                        </a>
                        <a
                            href="https://topan-portfolio.web.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                            <FaGlobe className="mr-2" /> Portfolio Website
                        </a>
                        <a
                            href="https://www.linkedin.com/in/topanroy/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                            <FaLinkedin className="mr-2" /> LinkedIn Profile
                        </a>
                        <a
                            href="https://www.facebook.com/TopanRoy41105/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                            <FaFacebook className="mr-2" /> Facebook Profile
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
