import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProfilePage() {
    return (
        <div className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>My Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p>Name: Abhijit Maske</p>
                    <p>Email: example@email.com</p>
                    <p>Phone: +91 XXXXX XXXXX</p>
                </CardContent>
            </Card>
        </div>
    );
}

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Edit, Save } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import profilePhoto from '../assets/profile-photo.png';

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
// };

// export default function ProfilePage() {
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     name: 'Carrie Sanders',
//     email: 'carrie_sanders@email.com',
//     title: 'Principal Product Designer',
//     location: 'San Francisco, CA'
//   });

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   const handleSave = () => {
//     console.log("Saved:", formData);
//     setIsEditing(false);
//   };

//   return (
//     <motion.div
//       className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 flex items-center justify-center px-4 py-16"
//       initial="hidden"
//       animate="visible"
//       variants={fadeUp}
//     >
//       <motion.div
//         className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8 space-y-8"
//         variants={fadeUp}
//       >
//         {/* Profile Avatar */}
//         <div className="flex flex-col items-center text-center">
//           <motion.div whileHover={{ scale: 1.05 }}>
//             <Avatar className="w-28 h-28 ring-4 ring-gray-300">
//               <AvatarImage src={profilePhoto} alt="Profile" />
//               <AvatarFallback>CS</AvatarFallback>
//             </Avatar>
//           </motion.div>
//           <h2 className="text-2xl font-semibold mt-4 text-gray-800">{formData.name}</h2>
//           <p className="text-gray-500 text-sm">{formData.title}</p>
//         </div>

//         {/* Editable Info Section */}
//         <div className="space-y-5">
//           {['name', 'email', 'title', 'location'].map((field) => (
//             <div key={field}>
//               <Label className="block text-xs font-semibold text-gray-500 uppercase mb-1">
//                 {field.charAt(0).toUpperCase() + field.slice(1)}
//               </Label>
//               {isEditing ? (
//                 <Input
//                   type={field === 'email' ? 'email' : 'text'}
//                   value={formData[field]}
//                   onChange={(e) => handleInputChange(field, e.target.value)}
//                   className="text-sm focus-visible:ring-gray-400"
//                 />
//               ) : (
//                 <p className="text-gray-800 font-medium text-sm bg-gray-50 border px-4 py-2 rounded-md">
//                   {formData[field]}
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>

//         <motion.div whileTap={{ scale: 0.95 }}>
//           <Button
//             onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
//             className="w-full bg-gray-800 hover:bg-gray-700 text-white text-sm py-3 mt-4 rounded-xl shadow-md"
//           >
//             {isEditing ? (
//               <span className="flex items-center justify-center gap-2">
//                 <Save className="w-4 h-4" /> Save
//               </span>
//             ) : (
//               <span className="flex items-center justify-center gap-2">
//                 <Edit className="w-4 h-4" /> Edit
//               </span>
//             )}
//           </Button>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// }
