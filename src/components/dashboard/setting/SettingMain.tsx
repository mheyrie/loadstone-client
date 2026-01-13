import { motion } from "framer-motion";
export default function SettingMain() {
  return (
     <>
    
        <motion.div
          initial={{ x: 20 }}
          transition={{ duration: 0.1 }}
          animate={{ x: 0 }}
        >
          <div className="flex items-center justify-between px-4 sm:px-6 py-4">
            <h3 className="font-bold text-brand-purple min-w-20 sm:min-w-28 text-sm sm:text-base">Settings</h3>
          </div>
        </motion.div>
        
 
    </>
  )
}