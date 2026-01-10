import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export function getSiteConfig() {
    const filePath = path.join(CONTENT_DIR, 'site.yaml');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return yaml.load(fileContents) as any;
}

export function getUnitsConfig() {
    const filePath = path.join(CONTENT_DIR, 'units.yaml');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return yaml.load(fileContents) as any;
}

export function getPageContent(slug: string) {
    const filePath = path.join(CONTENT_DIR, 'pages', `${slug}.md`);
    if (!fs.existsSync(filePath)) {
        return null;
    }
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    return { ...data, content };
}

export function getAllPages() {
    const pagesDir = path.join(CONTENT_DIR, 'pages');
    if (!fs.existsSync(pagesDir)) return [];

    const files = fs.readdirSync(pagesDir);
    return files.map((file) => file.replace(/\.md$/, ''));
}
