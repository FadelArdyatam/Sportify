
const Bola = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <div className="max-w-2xl bg-white rounded-lg shadow-lg">
        <div className="p-6">
          <button className="text-gray-500 text-xl">&lt;</button>
          <h1 className="text-2xl font-bold text-gray-800 mt-4">Proteam Bola Futsal Warrior</h1>
          <p className="text-xl font-semibold text-gray-700 mt-2">Rp. 5000 / -</p>
        </div>
        <div className="flex justify-center items-center mt-4">
          <img src="/path-to-your-image.png" alt="Proteam Bola Futsal Warrior" className="w-56 h-56 object-cover" />
        </div>
        <div className="p-6 space-y-4">
          <div className="flex space-x-4">
            <div className="flex flex-col items-center">
              <span className="font-medium text-gray-700">Pengepakan</span>
              <span className="font-semibold text-gray-800">Sab, 25 Mei 2024</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium text-gray-700">Durasi</span>
              <span className="font-semibold text-gray-800">1 hari</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium text-gray-700">Pengembalian</span>
              <span className="font-semibold text-gray-800">Sab, 25 Mei 2024</span>
            </div>
          </div>
          <button className="w-full bg-gray-800 text-white py-2 rounded-md">Sewa Sekarang</button>
        </div>
        <div className="p-6 bg-gray-100 border-t border-gray-300">
          <p className="text-gray-600 text-sm">
            Garansi pengembalian berlaku untuk produk cacat. Sewa aman & produk selalu dibersihkan.
          </p>
        </div>
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800">Detail Produk</h2>
          <table className="mt-4 text-sm text-gray-700">
            <tbody>
              <tr>
                <td className="font-medium">SKU</td>
                <td>: 090102062P7WR1</td>
              </tr>
              <tr>
                <td className="font-medium">Kategori</td>
                <td>: Barang Olahraga &gt; Sepak Bola & Futsal</td>
              </tr>
              <tr>
                <td className="font-medium">Merek/Brand</td>
                <td>: Proteam</td>
              </tr>
              <tr>
                <td className="font-medium">Kondisi</td>
                <td>: Baru</td>
              </tr>
              <tr>
                <td className="font-medium">Garansi</td>
                <td>: Tidak Ada Garansi</td>
              </tr>
              <tr>
                <td className="font-medium">Dimensi</td>
                <td>: 220.60 cm x 210.00 cm x 110.00 cm</td>
              </tr>
              <tr>
                <td className="font-medium">Berat</td>
                <td>: 440 gram</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bola;
