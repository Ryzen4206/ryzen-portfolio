
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Contact = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'alexa@example.com',
      link: 'mailto:alexa@example.com'
    },
    {
      icon: Phone,
      title: 'Call Me',
      value: '+1 234-567-8900',
      link: 'tel:+12345678900'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4 hover:text-primary transition-colors duration-300">Contact Me</h2>
          <p className="text-muted-foreground">Get in touch</p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div 
            ref={contactRef}
            className={`transition-all duration-1000 delay-300 ${
              contactVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8">Talk to me</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center p-6 bg-secondary/30 dark:bg-secondary/10 rounded-2xl hover:bg-primary/10 transition-all duration-300 group cursor-pointer hover:scale-105 hover:shadow-lg border border-border"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <info.icon className="text-primary group-hover:scale-110 transition-transform duration-200" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{info.title}</h4>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div 
            ref={formRef}
            className={`transition-all duration-1000 delay-500 ${
              formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8">Write me your project</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Insert your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent hover:border-primary/50 transition-all duration-300 bg-background"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Insert your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent hover:border-primary/50 transition-all duration-300 bg-background"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Write your project"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full p-4 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none hover:border-primary/50 transition-all duration-300 bg-background"
                />
              </div>
              <Button 
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold flex items-center space-x-2 w-full justify-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <span>Send Message</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
