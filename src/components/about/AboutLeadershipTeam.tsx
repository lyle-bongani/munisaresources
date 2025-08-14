import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const team = [
  {
    name: 'Tapuwa Martin Dikanifuwa',
    role: 'Head of Mine Operations',
    img: process.env.PUBLIC_URL + '/images/team/Tapuwa.png',
    socials: {
      facebook: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Tapuwa Martin Dikanifuwa',
    role: 'Director',
    img: process.env.PUBLIC_URL + '/images/team/Tapuwa2.png',
    socials: {
      facebook: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Anesu Rirwa',
    role: 'Data & Business Analyst',
    img: process.env.PUBLIC_URL + '/images/team/Anesu.png',
    socials: {
      facebook: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
];

const AboutLeadershipTeam: React.FC = () => (
  <section className="w-full bg-white py-8 px-2 md:px-8">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#ff7900] mb-1 mt-2">Our Leadership Team</h2>
    <div className="text-center text-[#181e5a] font-semibold mb-6 mt-1 text-base md:text-lg">Meet Our Team</div>
    <div className="flex flex-col md:flex-row justify-center gap-8 w-full max-w-6xl mx-auto mt-8">
      {team.map((member, i) => (
        <div key={member.name + i} className="relative bg-white rounded-2xl shadow-lg flex flex-col items-center w-full md:w-[31%] max-w-xs mx-auto pb-6 pt-0 px-2 border-none mt-16">
          {/* Top border accent */}
          <div className="absolute left-0 right-0 top-0 h-2 bg-[#ff7900] rounded-t-2xl z-10" style={{width: 'calc(100% - 48px)', left: 24, right: 24}} />
          {/* Profile photo */}
          <div className="relative z-20 -mt-10 mb-2 flex items-center justify-center">
            <img src={member.img} alt={member.name} className="w-40 h-40 object-cover rounded-2xl" style={{objectPosition: 'center'}} />
          </div>
          {/* Name */}
          <div className="text-[#181e5a] text-xl font-bold text-center mt-2 mb-0 leading-tight">{member.name}</div>
          {/* Role */}
          <div className="text-[#181e5a] text-base font-normal text-center mb-2">{member.role}</div>
          {/* Socials */}
          <div className="flex flex-row items-center justify-center gap-4 mt-2">
            <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: '#ff7900', borderRadius: '50%', width: 40, height: 40 }}>
    <FacebookIcon style={{ color: '#fff', fontSize: 24 }} />
  </span>
</a>
<a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: '#ff7900', borderRadius: '50%', width: 40, height: 40 }}>
    <InstagramIcon style={{ color: '#fff', fontSize: 24 }} />
  </span>
</a>
<a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: '#ff7900', borderRadius: '50%', width: 40, height: 40 }}>
    <LinkedInIcon style={{ color: '#fff', fontSize: 24 }} />
  </span>
</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default AboutLeadershipTeam;
