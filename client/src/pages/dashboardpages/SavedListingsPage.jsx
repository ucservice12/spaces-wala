import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function SavedListingsPage() {
    return (
        <div className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>Saved Listings</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <p>You have 5 saved listings.</p>
                </CardContent>
            </Card>
        </div>
    );
}
// SavedListingsPage.jsx
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Trash2 } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card } from '@/components/ui/card';

// const initialSavedListings = [
//   {
//     id: 1,
//     title: 'Cozy Studio Apartment in Bandra',
//     location: 'Mumbai, Maharashtra',
//     price: '₹65 Lakh',
//     image: '/assets/saved1.jpg'
//   },
//   {
//     id: 2,
//     title: '3BHK Luxury Flat in HSR Layout',
//     location: 'Bangalore, Karnataka',
//     price: '₹1.1 Cr',
//     image: '/assets/saved2.jpg'
//   },
//   {
//     id: 3,
//     title: '2BHK Independent House',
//     location: 'Pune, Maharashtra',
//     price: '₹85 Lakh',
//     image: '/assets/saved3.jpg'
//   }
// ];

// export default function SavedListingsPage() {
//   const [savedListings, setSavedListings] = useState(initialSavedListings);

//   const handleRemove = (id) => {
//     const confirmDelete = confirm('Remove this property from saved listings?');
//     if (confirmDelete) {
//       setSavedListings(prev => prev.filter(item => item.id !== id));
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-12 px-6">
//       <div className="max-w-6xl mx-auto space-y-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center"
//         >
//           <h1 className="text-3xl font-bold text-gray-800">Saved Listings</h1>
//           <p className="text-gray-500">Your favorite properties in one place</p>
//         </motion.div>

//         {savedListings.length === 0 ? (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-center mt-20 text-gray-500"
//           >
//             <p className="text-lg">You haven't saved any listings yet.</p>
//           </motion.div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {savedListings.map((property, index) => (
//               <motion.div
//                 key={property.id}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//               >
//                 <Card className="overflow-hidden shadow-md hover:shadow-xl rounded-xl transition">
//                   <img
//                     src={property.image}
//                     alt={property.title}
//                     className="w-full h-40 object-cover"
//                   />
//                   <div className="p-4 space-y-2">
//                     <h3 className="text-lg font-semibold text-gray-800">
//                       {property.title}
//                     </h3>
//                     <p className="text-sm text-gray-500">{property.location}</p>
//                     <p className="text-base font-medium text-gray-700">{property.price}</p>

//                     <div className="flex justify-end pt-3">
//                       <Button
//                         variant="destructive"
//                         size="sm"
//                         className="text-sm px-3"
//                         onClick={() => handleRemove(property.id)}
//                       >
//                         <Trash2 className="w-4 h-4 mr-1" /> Remove
//                       </Button>
//                     </div>
//                   </div>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }