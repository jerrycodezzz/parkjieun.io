import { Button, Tag } from "@jerrycodezzz/ui-kit";
import { Mail, Phone, MapPin, Github, Calendar } from "lucide-react";

function ProfileCard({ info, skills }) {
  return (
    <div className="flex flex-col items-center p-8 rounded border-1 border-gray-100">
      <div className="flex flex-row gap-40 items-center">
        {/* 왼쪽: 프로필 정보 */}
        <div className=" text-left">
          <img
            src={info.profile.photo}
            alt={info.profile.name}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-1 border-white shadow-sm mb-4"
          />
          <h3 className="text-2xl text-gray-900 mb-4">{info.profile.name}</h3>

          {/* 연락처 정보 */}
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
              <a
                href={info.profile.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 transition-colors">
                GitHub
              </a>
            </div>
          </div>

          {/* 버튼들 */}
        </div>

        {/* 오른쪽: 소개 및 기술 스택 */}
        <div className=" text-left">
          {/* 소개 */}

          {/* 핵심 키워드 */}
          {/* <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              핵심 키워드
            </h4>
            <div className="flex flex-wrap gap-3">
              {info.introduction.keywords.map((kw) => (
                <Tag
                  key={kw}
                  size="md"
                  className="px-4 py-2 bg-blue-100 text-blue-700 font-medium">
                  {kw}
                </Tag>
              ))}
            </div>
          </div> */}

          {/* 기술 스택 */}
          <div>
            <h4 className="text-xl text-gray-900 mb-4">기술 스택</h4>
            <div className="space-y-3">
              <SkillGroup
                title="Frontend"
                items={skills.frontend}
                color="blue"
              />
              <SkillGroup
                title="Backend"
                items={skills.backend}
                color="green"
              />
              <SkillGroup title="AI/ML" items={skills.AI} color="purple" />
              <SkillGroup title="Tools" items={skills.tools} color="gray" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** 기술 스택 그룹 */
function SkillGroup({ title, items, color }) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    gray: "bg-gray-100 text-gray-700",
  };

  return (
    <div>
      <h5 className="text-sm font-semibold text-gray-700 mb-3">{title}</h5>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <Tag
            key={skill}
            size="sm"
            className={`px-3 py-1 font-medium ${colorClasses[color]}`}>
            {skill}
          </Tag>
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;
