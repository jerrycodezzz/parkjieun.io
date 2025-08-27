import { Button, Tag } from "@jerrycodezzz/ui-kit";
import { Mail, Phone, MapPin, Github, Calendar } from "lucide-react";

function ProfileCard({ info, skills }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 mx-auto px-6 pt-10 md:max-w-6xl">
      {/* 왼쪽: 프로필 정보 */}
      <div className="flex flex-col items-center justify-center text-left">
        <img
          src={info.profile.photo}
          className="w-40 h-40 md:w-33 md:h-33 rounded-full shadow-md  object-cover mb-6"
        />
        <h3 className="text-xl font-light text-gray-900 mb-4">
          {info.profile.name}
        </h3>
        <div className="space-y-3 mb-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4 text-primary-50" />
            <span>{info.profile.birthDate}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Phone className="w-4 h-4 text-primary-50" />
            <span>{info.profile.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Mail className="w-4 h-4 text-primary-50" />
            <a
              href={`mailto:${info.profile.email}`}
              className="hover:text-primary-50 transition-colors">
              {info.profile.email}
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4 text-primary-50" />
            <span>{info.profile.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Github className="w-4 h-4 text-primary-50" />
            <a href={info.profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* 오른쪽: 기술 스택 */}
      <div className="text-left flex flex-col  items-center justify-center">
        <div className="space-y-3">
          <SkillGroup title="Frontend" items={skills.frontend} />
          <SkillGroup title="Backend" items={skills.backend} />
          <SkillGroup title="AI/ML" items={skills.AI} />
          <SkillGroup title="Tools" items={skills.tools} />
        </div>
      </div>
    </div>
  );
}

/** 기술 스택 그룹 */
function SkillGroup({ title, items }) {
  return (
    <div>
      <h5 className="text-sm font-semibold text-gray-600 mb-3">{title}</h5>
      <div className="flex flex-wrap gap-1.5 md:gap-2">
        {items.map((skill) => (
          <Tag key={skill} size="sm">
            {skill}
          </Tag>
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;
