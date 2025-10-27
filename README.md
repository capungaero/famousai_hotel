# Kids YouTube Player 🎬

A safe, parent-controlled YouTube video player designed specifically for children. Parents can curate video playlists and set daily viewing limits to ensure healthy screen time.

## Features

### 👶 Kids Mode
- **Colorful, Kid-Friendly Interface**: Bright, playful design with large touch-friendly buttons
- **Curated Video Grid**: Display 6+ parent-approved videos with thumbnails
- **Visual Timer**: Progress bars showing remaining videos and minutes for the day
- **Safe Playback**: Embedded YouTube player with parental controls
- **Automatic Limits**: Videos lock when daily quota is reached

### 👨‍👩‍👧 Parent Mode
- **Secure Login**: Password-protected admin panel (default: parent123)
- **Video Management**: Add videos via YouTube URL, auto-extracts video ID and thumbnail
- **Daily Limits**: Set maximum videos and minutes per day
- **Watch History**: Track what kids watched and for how long
- **Analytics Dashboard**: View usage statistics and patterns
- **Reset Controls**: Reset daily counters as needed

## How to Use

1. **Switch Modes**: Use the toggle buttons in the top-right to switch between Kids and Parent modes
2. **Parent Setup**: 
   - Login with password (default: parent123)
   - Add YouTube videos by pasting URLs
   - Set daily limits (videos and minutes)
3. **Kids Use**: 
   - Click on any video card to watch
   - See remaining time in the timer
   - Videos lock when limits reached

## Technical Details

- **Framework**: React + TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Persistence**: Local Storage
- **Video Player**: YouTube iframe embed

## Default Settings

- Max Videos: 5 per day
- Max Minutes: 60 per day
- Admin Password: parent123

All settings can be customized in Parent Mode!
