import { useState } from 'react';
import './Profile.css';

interface Badge {
  id: number;
  name: string;
  icon: string;
  earned: boolean;
  description: string;
}

interface WeeklyActivity {
  day: string;
  minutes: number;
}

const Profile = () => {
  const [activeTab, setActiveTab] = useState<'stats' | 'badges'>('stats');

  const user = {
    name: 'Alex Rivera',
    joinedDate: 'March 2024',
    totalWorkouts: 47,
    totalMinutes: 2340,
    streak: 12,
    level: 8,
  };

  const badges: Badge[] = [
    { id: 1, name: 'First Step', icon: '🎯', earned: true, description: 'Complete your first class' },
    { id: 2, name: 'Week Warrior', icon: '🔥', earned: true, description: '7-day streak' },
    { id: 3, name: 'Social Butterfly', icon: '🦋', earned: true, description: 'Attend 10 group classes' },
    { id: 4, name: 'Flexibility Master', icon: '🧘', earned: true, description: 'Complete 15 yoga sessions' },
    { id: 5, name: 'Month Champion', icon: '👑', earned: false, description: '30-day streak' },
    { id: 6, name: 'Century Club', icon: '💯', earned: false, description: '100 total workouts' },
  ];

  const weeklyActivity: WeeklyActivity[] = [
    { day: 'Mon', minutes: 45 },
    { day: 'Tue', minutes: 60 },
    { day: 'Wed', minutes: 30 },
    { day: 'Thu', minutes: 75 },
    { day: 'Fri', minutes: 50 },
    { day: 'Sat', minutes: 90 },
    { day: 'Sun', minutes: 40 },
  ];

  const maxMinutes = Math.max(...weeklyActivity.map(d => d.minutes));

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <div className="avatar-circle">AR</div>
          <div className="level-badge">Level {user.level}</div>
        </div>
        <div className="profile-info">
          <h1>{user.name}</h1>
          <p>Member since {user.joinedDate}</p>
        </div>
      </div>

      <div className="profile-content">
        <div className="stats-overview">
          <div className="stat-card">
            <div className="stat-icon">🏋️</div>
            <div className="stat-value">{user.totalWorkouts}</div>
            <div className="stat-label">Total Workouts</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⏱️</div>
            <div className="stat-value">{Math.floor(user.totalMinutes / 60)}h</div>
            <div className="stat-label">Active Time</div>
          </div>
          <div className="stat-card streak">
            <div className="stat-icon">🔥</div>
            <div className="stat-value">{user.streak}</div>
            <div className="stat-label">Day Streak</div>
          </div>
        </div>

        <div className="tab-navigation">
          <button
            className={`tab-button ${activeTab === 'stats' ? 'active' : ''}`}
            onClick={() => setActiveTab('stats')}
          >
            Activity Stats
          </button>
          <button
            className={`tab-button ${activeTab === 'badges' ? 'active' : ''}`}
            onClick={() => setActiveTab('badges')}
          >
            Badges
          </button>
        </div>

        {activeTab === 'stats' ? (
          <div className="stats-section">
            <div className="section-card">
              <h2>This Week's Activity</h2>
              <div className="weekly-chart">
                {weeklyActivity.map((data, idx) => (
                  <div key={idx} className="chart-bar-container">
                    <div className="chart-bar-wrapper">
                      <div
                        className="chart-bar"
                        style={{ height: `${(data.minutes / maxMinutes) * 100}%` }}
                      >
                        <span className="bar-value">{data.minutes}m</span>
                      </div>
                    </div>
                    <div className="chart-label">{data.day}</div>
                  </div>
                ))}
              </div>
              <div className="week-summary">
                <p>
                  <strong>{weeklyActivity.reduce((sum, d) => sum + d.minutes, 0)} minutes</strong> this week
                </p>
                <p className="goal-text">Keep it up! You're 60 mins away from your weekly goal 🎯</p>
              </div>
            </div>

            <div className="section-card">
              <h2>Recent Activities</h2>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon">🧘</div>
                  <div className="activity-details">
                    <h4>Yoga for All</h4>
                    <p>Saturday • 60 minutes</p>
                  </div>
                  <div className="activity-stat">+45 pts</div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">💃</div>
                  <div className="activity-details">
                    <h4>Dance Fitness</h4>
                    <p>Friday • 50 minutes</p>
                  </div>
                  <div className="activity-stat">+40 pts</div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">🏃</div>
                  <div className="activity-details">
                    <h4>HIIT Workout</h4>
                    <p>Thursday • 45 minutes</p>
                  </div>
                  <div className="activity-stat">+55 pts</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="badges-section">
            <div className="section-card">
              <h2>Achievement Badges</h2>
              <p className="section-subtitle">Collect badges as you reach new milestones!</p>
              <div className="badges-grid">
                {badges.map(badge => (
                  <div key={badge.id} className={`badge-card ${badge.earned ? 'earned' : 'locked'}`}>
                    <div className="badge-icon">{badge.icon}</div>
                    <h4>{badge.name}</h4>
                    <p>{badge.description}</p>
                    {!badge.earned && <div className="locked-overlay">🔒</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
