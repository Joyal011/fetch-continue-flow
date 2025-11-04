import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import missionImage from "@/assets/mission-worship.jpg";
import valuesImage from "@/assets/values-community.jpg";

const AboutPage = () => {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground font-heading">
              About Chosen Generation
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              A vibrant youth ministry empowering the next generation through faith, worship, and community
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-foreground font-heading">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Chosen Generation is a vibrant youth ministry dedicated to 
                  empowering the next generation to live bold, faith-filled lives. We create a 
                  dynamic space where young people can encounter God, build authentic relationships, 
                  and discover their purpose in a welcoming community.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through worship, Bible study, community service, and fellowship, we equip youth 
                  to be ambassadors of Christ in their schools, families, and communities. Our mission 
                  is to raise up a generation that knows God intimately, lives with purpose, and impacts 
                  the world for His glory.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe that every young person has been chosen by God for a specific purpose, 
                  and we are committed to helping them discover and walk in that calling. Through 
                  passionate worship, relevant teaching, and genuine community, we're building a 
                  movement of young people who are on fire for God.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={missionImage} 
                  alt="Worship at Chosen Generation" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
                <img 
                  src={valuesImage} 
                  alt="Community gathering at Chosen Generation" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h2 className="text-4xl font-bold text-foreground font-heading">
                  Our Core Values
                </h2>
                <div className="space-y-4">
                  <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
                    <h4 className="font-bold text-xl mb-3 text-foreground">Faith</h4>
                    <p className="text-muted-foreground">
                      We are grounded in God's Word and passionate about worship. Our faith is not 
                      just something we talk about—it's the foundation of everything we do. We encourage 
                      every young person to develop a personal, vibrant relationship with Jesus Christ.
                    </p>
                  </Card>
                  <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
                    <h4 className="font-bold text-xl mb-3 text-foreground">Fellowship</h4>
                    <p className="text-muted-foreground">
                      We create authentic friendships and a supportive community where everyone belongs. 
                      No one walks alone in Chosen Generation. We laugh together, cry together, pray 
                      together, and grow together as a family in Christ.
                    </p>
                  </Card>
                  <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
                    <h4 className="font-bold text-xl mb-3 text-foreground">Purpose</h4>
                    <p className="text-muted-foreground">
                      We live with intention and make a difference for Christ. Every young person is 
                      created for a purpose, and we help them discover their unique calling. Through 
                      service, outreach, and ministry, we're making an impact in our community and beyond.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground font-heading">
              What We Do
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🎵</div>
                <h4 className="font-bold text-xl mb-3 text-foreground">Worship Nights</h4>
                <p className="text-muted-foreground">
                  Powerful worship experiences where we encounter God's presence through music, 
                  prayer, and praise. Our worship team leads us into genuine, heartfelt worship.
                </p>
              </Card>
              <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📖</div>
                <h4 className="font-bold text-xl mb-3 text-foreground">Bible Studies</h4>
                <p className="text-muted-foreground">
                  Interactive Bible studies where we dive deep into God's Word, ask tough questions, 
                  and discover how Scripture applies to our daily lives.
                </p>
              </Card>
              <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="font-bold text-xl mb-3 text-foreground">Community Service</h4>
                <p className="text-muted-foreground">
                  Hands-on opportunities to serve our community and show Christ's love through 
                  practical action. We believe faith without works is dead.
                </p>
              </Card>
              <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">⛺</div>
                <h4 className="font-bold text-xl mb-3 text-foreground">Camps & Retreats</h4>
                <p className="text-muted-foreground">
                  Life-changing retreats and camps where we step away from distractions, encounter 
                  God in new ways, and build lasting friendships.
                </p>
              </Card>
              <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="font-bold text-xl mb-3 text-foreground">Leadership Development</h4>
                <p className="text-muted-foreground">
                  Training and mentoring young leaders to discover their gifts, develop their 
                  talents, and step into their God-given potential.
                </p>
              </Card>
              <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🎉</div>
                <h4 className="font-bold text-xl mb-3 text-foreground">Fun & Fellowship</h4>
                <p className="text-muted-foreground">
                  Regular social events, game nights, and hangouts where we build friendships 
                  and enjoy life together as a community.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground font-heading">
              Our Team
            </h2>
            <div className="max-w-4xl mx-auto">
              {/* Youth Leader */}
              <div className="mb-12 text-center">
                <Card className="p-8 bg-card hover:shadow-lg transition-shadow inline-block">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Youth Leader</h3>
                  <p className="text-xl text-muted-foreground">Diplak Maharjan</p>
                </Card>
              </div>
              
              {/* Core Members */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Core Members</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="p-6 bg-card hover:shadow-lg transition-shadow text-center">
                    <p className="text-lg font-semibold text-foreground">Dhiraj Saru Magar</p>
                  </Card>
                  <Card className="p-6 bg-card hover:shadow-lg transition-shadow text-center">
                    <p className="text-lg font-semibold text-foreground">Suziena Maharjan</p>
                  </Card>
                  <Card className="p-6 bg-card hover:shadow-lg transition-shadow text-center">
                    <p className="text-lg font-semibold text-foreground">Jenisha Shrestha</p>
                  </Card>
                  <Card className="p-6 bg-card hover:shadow-lg transition-shadow text-center">
                    <p className="text-lg font-semibold text-foreground">Ester Ruchal</p>
                  </Card>
                  <Card className="p-6 bg-card hover:shadow-lg transition-shadow text-center">
                    <p className="text-lg font-semibold text-foreground">Surakshya Thapa Magar</p>
                  </Card>
                  <Card className="p-6 bg-card hover:shadow-lg transition-shadow text-center">
                    <p className="text-lg font-semibold text-foreground">Sofiya Lamichane</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-16 px-4 bg-primary/5">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground font-heading">
              Join Our Community
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Whether you're new to faith or have been following Jesus for years, there's a 
              place for you in Chosen Generation. Come as you are and discover a community 
              that will accept you, challenge you, and help you grow.
            </p>
            <p className="text-lg text-muted-foreground/90 italic max-w-2xl mx-auto">
              "I will give them a heart to know me, that I am the Lord; they will be my people, 
              and I will be their God, for they will return to me with all their heart." — Jeremiah 24:7
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
    </PageTransition>
  );
};

export default AboutPage;
