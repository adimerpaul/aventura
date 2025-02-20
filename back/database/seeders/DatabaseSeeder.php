<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

//        User::factory()->create([
//            'name' => 'Test User',
//            'email' => 'test@example.com',
//        ]);
        $user = User::create([
            'name' => 'Adimer Paul Chambi Ajata',
            'username' => 'admin',
            'avatar' => 'default.png',
//            'email' => 'admin@gmail.com',
            'password' => bcrypt('admin123Admin'),
            'role' => 'Admin',
        ]);
        $user = User::create([
            'name' => 'Roger Guillermo Arias Rodriguez',
            'username' => 'roger',
            'avatar' => 'default.png',
//            'email' => 'admin@gmail.com',
            'password' => bcrypt('roger123Roger'),
        ]);
    }
}
