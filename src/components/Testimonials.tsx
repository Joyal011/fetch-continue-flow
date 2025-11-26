import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Joel S.",
      role: "Youth Member",
      company: "Chosen Generation",
      content: "Chosen Generation has transformed my faith journey. The worship, fellowship, and teachings have helped me grow closer to God and discover my purpose.",
      rating: 5,
      avatar: ""
    },
    {
      id: 2,
      name: "Dhiraj S.",
      role: "Core Member",
      company: "Chosen Generation",
      content: "Being part of this community has given me lifelong friends and a deeper understanding of what it means to live for Christ. The leaders truly care about our spiritual growth.",
      rating: 5,
      avatar: ""
    },
    {
      id: 3,
      name: "Sanjay S.",
      role: "Youth Member",
      company: "Chosen Generation",
      content: "Through the youth camps and events, I've experienced God's presence in powerful ways. This ministry has been instrumental in shaping who I am today.",
      rating: 5,
      avatar: ""
    }
  ];

  return (
    <AnimatedTestimonials
      title="Lives Transformed"
      subtitle="Hear from youth whose lives have been impacted by God's work in our community"
      badgeText="Real Stories"
      testimonials={testimonials}
      autoRotateInterval={6000}
    />
  );
};

export default Testimonials;
