/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import { Ticket, Users, Calendar } from 'lucide-react';

function TicketSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Don't Miss Out - Get Your Ticket Now!</h2>
          <p className="text-xl mb-12">FOMO is real. DevFest Ogbomoso 2024 tickets are selling fast, so don't wait till the last minute.</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-primary rounded-xl">
              <Ticket className="w-8 h-8 mb-4 mx-auto" />
              <h3 className="font-bold mb-2">Early Bird</h3>
              <p>Limited spots available</p>
            </div>
            <div className="p-6 bg-primary rounded-xl">
              <Users className="w-8 h-8 mb-4 mx-auto" />
              <h3 className="font-bold mb-2">500+ Attendees</h3>
              <p>Join the community</p>
            </div>
            <div className="p-6 bg-primary rounded-xl">
              <Calendar className="w-8 h-8 mb-4 mx-auto" />
              <h3 className="font-bold mb-2">2 Full Days</h3>
              <p>Packed with content</p>
            </div>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-4 rounded-full inline-flex items-center gap-2"
          >
            <Ticket className="w-5 h-5" />
            Get Tickets
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
export default TicketSection;