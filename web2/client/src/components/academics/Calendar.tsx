const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const dates = Array.from({ length: 35 }, (_, i) => i - 4);

export default function Calendar() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg border border-border p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-primary">January 2027</h2>
        </div>
        
        <div className="grid grid-cols-7 gap-2">
          {days.map(day => (
            <div key={day} className="text-center font-semibold text-primary py-2">
              {day}
            </div>
          ))}
          
          {dates.map((date, idx) => (
            <div
              key={idx}
              className={`aspect-square flex items-center justify-center rounded-lg ${
                date < 1 || date > 31
                  ? 'text-muted-foreground/30'
                  : 'bg-primary/5 hover:bg-primary/10 text-foreground cursor-pointer'
              }`}
            >
              {date < 1 ? 31 + date : date > 31 ? date - 31 : date}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
