# GTS Shad/Cn Kit

A comprehensive UI component library built with Next.js 15, TypeScript, and shadcn/ui. Created by **Faheem Alvi** for **Geek Tech Sol**.

> **Note**: This project is open source and free to use. Feel free to fork, clone, and modify it according to your needs. This is a reference implementation showcasing modern UI patterns and components.

## 🚀 Features

- **Modern UI Components**: Built with shadcn/ui and Radix UI primitives
- **TypeScript**: Full type safety throughout the application
- **Next.js 15**: Latest Next.js with App Router
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Built-in theme switching
- **Component Showcase**: Live examples of all components
- **Open Source**: Free to use, fork, and modify

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Charts**: Recharts
- **State Management**: Zustand
- **Package Manager**: pnpm

## 📦 Components Included

### Form Components
- Button
- Input
- Textarea
- Checkbox
- Switch
- Select
- Radio Group
- Slider
- Toggle

### Layout Components
- Card
- Sheet
- Dialog
- Alert Dialog
- Tabs
- Accordion
- Separator
- Badge
- Avatar

### Data Display
- Table
- Progress
- Alert
- Toast
- Tooltip
- Popover

### Navigation
- Sidebar
- Top Navigation
- Breadcrumb
- Pagination

## 🎨 Design System

The GTS Shad/Cn Kit follows modern design principles:

- **Consistent Spacing**: 4px base unit system
- **Typography Scale**: Harmonious font sizing
- **Color Palette**: Semantic color tokens
- **Component Variants**: Multiple styles for each component
- **Accessibility**: WCAG 2.1 AA compliant

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/geektechsol/gts-shadcn-kit.git
   cd gts-shadcn-kit
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Live Demo

🌐 **View the live demo**: [https://faheemalvii.github.io/GTS-UI-Kit/](https://faheemalvii.github.io/GTS-UI-Kit/)

The application is automatically deployed to GitHub Pages on every push to the main branch.

## 📱 Pages Included

### Authentication
- **Login** (`/login`) - User sign-in with form validation
- **Signup** (`/signup`) - User registration with password strength
- **Forgot Password** (`/forgot-password`) - Password reset flow

### Dashboard
- **Main Dashboard** (`/dashboard`) - Analytics and metrics
- **Analytics** (`/analytics`) - Data visualization
- **Reports** (`/reports`) - Report generation

### Business Management
- **Orders** (`/orders`) - Order management
- **Products** (`/products`) - Product catalog
- **Customers** (`/customers`) - Customer management
- **Suppliers** (`/suppliers`) - Supplier management

### Finance
- **Revenue** (`/revenue`) - Revenue tracking
- **Expenses** (`/expenses`) - Expense management
- **Invoices** (`/invoices`) - Invoice system

### System
- **Users** (`/users`) - User management
- **Settings** (`/settings`) - System configuration
- **Calendar** (`/calendar`) - Event scheduling
- **Profile** (`/profile`) - User profile management

## 🎯 Use Cases

This UI Kit serves as a reference implementation for:

- **SaaS Applications**: Complete dashboard and management interfaces
- **Admin Panels**: Comprehensive admin interfaces
- **E-commerce**: Product and order management systems
- **Analytics Dashboards**: Data visualization and reporting
- **CRM Systems**: Customer relationship management
- **ERP Systems**: Enterprise resource planning
- **Learning**: Study modern React/Next.js patterns
- **Starting Point**: Use as a foundation for your own projects

## 🔧 Customization

### Theme Customization
The kit includes a comprehensive theme system:

```typescript
// Customize colors in globals.css
:root {
  --primary: 222.2 84% 4.9%;
  --primary-foreground: 210 40% 98%;
  // ... more color tokens
}
```

### Component Customization
All components are built with Tailwind CSS and can be easily customized:

```tsx
<Button 
  variant="outline" 
  size="lg" 
  className="custom-styles"
>
  Custom Button
</Button>
```

## 📚 Documentation

Each component includes:
- **Props API**: Complete TypeScript definitions
- **Usage Examples**: Real-world implementation examples
- **Variants**: All available component variants
- **Accessibility**: ARIA attributes and keyboard navigation

## 🚀 Deployment

### GitHub Pages (Automatic)

This project is configured for automatic deployment to GitHub Pages:

1. **Fork the repository** to your GitHub account
2. **Enable GitHub Pages** in your repository settings
3. **Set source to GitHub Actions** in Pages settings
4. **Push to main branch** - deployment happens automatically

The app will be available at: `https://faheemalvii.github.io/GTS-UI-Kit/`

### Manual Deployment

```bash
# Build for production
pnpm run export

# The static files will be in the 'out' directory
# Upload the contents to your hosting provider
```

### Other Platforms

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `out` folder or connect your repo
- **AWS S3**: Upload the `out` folder contents to an S3 bucket
- **Any static hosting**: The `out` folder contains all static files

## 🍴 Fork & Use

This project is designed to be forked and customized for your specific needs:

1. **Fork the repository** to your GitHub account
2. **Clone your fork** locally
3. **Customize** the components and styling as needed
4. **Deploy** to your preferred platform
5. **Modify** the codebase to fit your requirements

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### What you can do:
- ✅ Use in personal and commercial projects
- ✅ Modify and customize as needed
- ✅ Distribute your modified versions
- ✅ Use in proprietary software
- ✅ Fork and maintain your own version

### What you should do:
- 📝 Include the original license and copyright notice
- 📝 Give appropriate credit to the original author
- 📝 Document any significant changes you make

## ⚠️ Important Notice

This project is provided as-is for educational and reference purposes. While it's open source and free to use, please note:

- **No Active Maintenance**: This project is not actively maintained
- **No Issue Support**: Issues and pull requests will not be addressed
- **Use at Your Own Risk**: Please test thoroughly before using in production
- **Fork & Customize**: Feel free to fork and modify according to your needs

## 👨‍💻 Author

**Faheem Alvi**  
Lead Developer at Geek Tech Sol  
Email: faheem@geektechsol.com

## 🏢 Company

**Geek Tech Sol**  
Modern software solutions and UI component libraries  
Website: [geektechsol.com](https://geektechsol.com)

---

Built with ❤️ by Faheem Alvi for Geek Tech Sol