export default function ProjectCard({ project }) {
  return (
    <div className="max-w-sm w-full bg-gradient-to-br from-[rgb(134,67,179)] to-[#136441] shadow-lg rounded-2xl p-6 transition transform hover:scale-105 hover:shadow-2xl">
      <div className="flex items-center space-x-4">
        <img
          src={project.icon}
          alt={project.name}
          className="w-12 h-12 rounded-full border border-gray-300"
        />
        <div>
          <h2 className="text-xl font-bold text-white">{project.name}</h2>
          <p className="text-gray-200 text-sm mt-1">{project.desc}</p>
        </div>
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-sm text-black hover:underline font-medium"
      >
        View on GitHub →
      </a>
    </div>
  );
}
