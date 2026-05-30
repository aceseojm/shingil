export default function NaverMap() {
  return (
    <div className="w-full rounded-xl overflow-hidden" style={{ height: "450px" }}>
      <iframe
        src="https://maps.google.com/maps?q=경기도+안산시+단원구+신길동+1379&z=17&output=embed&hl=ko"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="신길온천역 위치"
      />
    </div>
  );
}
